import { Modal, useMediaQuery, useTheme } from "@mui/material";
import React, {useEffect} from "react";
import { CustomModalWrapper } from "../../styled-components/CustomStyles.style";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const CustomModal = ({
	openModal,
	setModalOpen,
	children,
	disableAutoFocus,
}) => {

	ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));

	const handleClose = (event, reason) => {
		if (reason && reason == "backdropClick") {
			if (disableAutoFocus) {
				return;
			} else {
				setModalOpen(false);
			}
		} else {
			setModalOpen(false);
		}
	};
	return (
		<div>
			<Modal
				open={openModal}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				disableAutoFocus={disableAutoFocus}
				backDrop
			>
				<CustomModalWrapper>{children}</CustomModalWrapper>
			</Modal>
		</div>
	);
};
// CustomModal.propTypes = {};

export default CustomModal;
