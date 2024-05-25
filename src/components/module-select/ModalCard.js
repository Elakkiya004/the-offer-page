import { Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import {
	CustomButtonCancel,
	CustomButtonSuccess,
} from "../../styled-components/CustomButtons.style";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import CustomImageContainer from "../CustomImageContainer";
import warning from "./warningIcon.svg";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const ModalCard = (props) => {

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

	const { handleCloseModal, handleModalSuccess } = props;
	const { t } = useTranslation();
	return (
		<Paper
			sx={{
				width: { xs: "300px", sm: "550px", md: "600px" },
				p: "3rem",
				outline: "none",
			}}
		>
			<CustomStackFullWidth
				alignItems="center"
				justifyContent="center"
				spacing={3}
			>
				<CustomImageContainer
					src={warning.src}
					width="56px"
					height="56px"
					alt="warning"
					objectFit="cover"
				/>
				<Typography textAlign="center" fontWeight="bold" variant="h5">
					{t(
						"If you want to change module type, it will reset your cart and other related cache data."
					)}
				</Typography>
				<CustomStackFullWidth
					direction="row"
					alignItems="center"
					justifyContent="center"
					spacing={2}
				>
					<CustomButtonCancel onClick={handleCloseModal}>
						{t("Cancel")}
					</CustomButtonCancel>
					<CustomButtonSuccess onClick={() => handleModalSuccess()}>
						{t("Change")}
					</CustomButtonSuccess>
				</CustomStackFullWidth>
			</CustomStackFullWidth>
		</Paper>
	);
};

ModalCard.propTypes = {};

export default ModalCard;
