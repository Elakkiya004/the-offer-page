import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StarRateIcon from "@mui/icons-material/StarRate";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const RatingStar = (props) => {

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

  const { fontSize, color } = props;
  return (
    <>
      <StarRateIcon sx={{ fontSize: fontSize, color: color }} />
    </>
  );
};

RatingStar.propTypes = {};

export default RatingStar;
