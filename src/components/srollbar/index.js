import React, { forwardRef, useEffect } from "react";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


import { styled } from "@mui/material/styles";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
const ScrollbarRoot = styled(SimpleBar)``;

// eslint-disable-next-line react/display-name
export const Scrollbar = forwardRef((props, ref) => {

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

  return <ScrollbarRoot ref={ref} {...props} />;
});
