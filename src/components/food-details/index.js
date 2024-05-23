import React from "react";
import PropTypes from "prop-types";
import FoodDetailModal from "./foodDetail-modal/FoodDetailModal";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const FoodDetails = (props) => {

  const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	  };
	  TagManager.initialize(tagManagerArgs);
	
	  useEffect(() => {
		TagManager.dataLayer({
			event: 'pageview',
			path: '/'
		});
	}, []);

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);


  const { productDetailsData, configData } = props;
  return (
    <>
      <FoodDetailModal product={productDetailsData} configData={configData} />
    </>
  );
};

FoodDetails.propTypes = {};

export default FoodDetails;
