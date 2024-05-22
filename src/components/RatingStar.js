import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StarRateIcon from "@mui/icons-material/StarRate";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const RatingStar = (props) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { fontSize, color } = props;
  return (
    <>
      <StarRateIcon sx={{ fontSize: fontSize, color: color }} />
    </>
  );
};

RatingStar.propTypes = {};

export default RatingStar;
