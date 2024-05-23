import { Typography } from "@mui/material";
import { t } from "i18next";
import React, { useEffect } from "react";
import { CustomStackFullWidth } from "../styled-components/CustomStyles.style";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const ImageBottomBox = (props) => {

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

	const { delivery_time, free_delivery } = props;
	return (
		<CustomStackFullWidth
			alignItems="flex-end"
			direction="row"
			justifyContent="center"
			spacing={1}
			padding="5px"
			sx={{
				height: "53px",
				position: "absolute",
				bottom: 0,
				color: "whiteContainer.main",
				background:
					"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
			}}
		>
			<Typography
				textAlign="center"
				sx={{ fontSize: { xs: "10px", sm: "inherit" } }}
			>
				{delivery_time}
			</Typography>
			{free_delivery && (
				<>
					<Typography fontWeight="bold" paddingBottom="8px">
						.
					</Typography>
					<Typography
						textAlign="center"
						sx={{ fontSize: { xs: "10px", sm: "inherit" } }}
					>
						{t("Free Delivery")}
					</Typography>
				</>
			)}
		</CustomStackFullWidth>
	);
};

ImageBottomBox.propTypes = {};

export default ImageBottomBox;
