import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PlaceIcon from "@mui/icons-material/Place";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const PlaceIconComponent = (props) => {

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
    <div>
      <PlaceIcon sx={{ fontSize: fontSize, color: color }} />
    </div>
  );
};

export default PlaceIconComponent;
