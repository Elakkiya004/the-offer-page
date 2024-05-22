import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PlaceIcon from "@mui/icons-material/Place";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const PlaceIconComponent = (props) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { fontSize, color } = props;
  return (
    <div>
      <PlaceIcon sx={{ fontSize: fontSize, color: color }} />
    </div>
  );
};

export default PlaceIconComponent;
