import React, { useEffect } from "react";
import { Stack } from "@mui/system";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CustomScrollBar = ({ popOverHeightHandler }) => {

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

  return <Stack sx={{}}></Stack>;
};

export default CustomScrollBar;
