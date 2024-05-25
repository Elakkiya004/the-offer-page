import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const CustomModal = (props) => {

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

	const { openModal, handleClose, disableAutoFocus, children } = props;
	const handleCloseModal = (event, reason) => {
		if (reason && reason == "backdropClick") {
			if (disableAutoFocus) {
				return;
			} else {
				handleClose?.();
			}
		} else {
			handleClose?.();
		}
	};

	return (
		<Dialog open={openModal} onClose={handleCloseModal}>
			{children}
		</Dialog>
	);
};

CustomModal.propTypes = {
	openModal: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default CustomModal;
