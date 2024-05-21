import React from "react";
import PropTypes from "prop-types";
import FoodDetailModal from "./foodDetail-modal/FoodDetailModal";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const FoodDetails = (props) => {

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
