import { useTheme } from "@emotion/react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { TopBarButton } from "./header/NavBar.style";
import ClickToCall from "./header/top-navbar/ClickToCall";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CallToAdmin = (props) => {

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

	const { configData } = props;
	const theme = useTheme();
	return (
		<ClickToCall phone={configData?.phone}>
			<TopBarButton
				size="small"
				variant="text"
				sx={{
					".MuiTypography-body1": {
						transition: "all ease 0.5s",
					},
					"&:hover .MuiTypography-body1": {
						color: theme.palette.primary.main + "!important",
					},
				}}
				startIcon={
					<LocalPhoneIcon
						sx={{
							ml: 1,
							color: (theme) => theme.palette.neutral[1000],
						}}
					/>
				}
			>
				<Typography sx={{ color: (theme) => theme.palette.neutral[1000] }}>
					{configData?.phone}
				</Typography>
			</TopBarButton>
		</ClickToCall>
	);
};

CallToAdmin.propTypes = {};

export default CallToAdmin;
