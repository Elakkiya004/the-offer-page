import React from "react";
import PropTypes from "prop-types";
import { Modal } from "@mui/material";
import { FoodDetailModalStyle } from "../food-details/foodDetail-modal/foodDetailModal.style";
import ProductDetailsSection from "../product-details/product-details-section/ProductDetailsSection";
import { useSelector } from "react-redux";
import {Scrollbar} from "../srollbar";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const ProductDetailModal = (props) => {

  const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	  };
	  if (typeof window !== 'undefined') {
      TagManager.initialize(tagManagerArgs);
    
      useEffect(() => {
        TagManager.dataLayer({
          event: 'pageview',
          path: '/'
        });
      }, []);
    }


  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { open, handleModalClose, product } = props;
  const { configData } = useSelector((state) => state.configData);
  return (
    <Modal open={open} onClose={handleModalClose} disableAutoFocus={true}>
      <FoodDetailModalStyle sx={{ bgcolor: "background.paper" }}>
          <Scrollbar style={{maxHeight:'100%'}}>
              <ProductDetailsSection
                  productDetailsData={product}
                  configData={configData}
                  productUpdate
                  handleModalClose={handleModalClose}
              />
          </Scrollbar>

      </FoodDetailModalStyle>
    </Modal>
  );
};

ProductDetailModal.propTypes = {};

export default ProductDetailModal;
