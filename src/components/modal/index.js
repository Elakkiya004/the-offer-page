import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const CustomModal = (props) => {

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
