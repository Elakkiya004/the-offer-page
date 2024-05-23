import { Popover } from "@mui/material";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CustomPopover = (props) => {

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

  const { openPopover, anchorEl, placement, handleClose, children, top, left } =
    props;

  return (
    <Popover
      sx={{
        top: top, // Custom top position
        left: left, // Custom left position
      }}
      open={openPopover}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: placement,
      }}
    >
      {children}
    </Popover>
  );
};

export default CustomPopover;
