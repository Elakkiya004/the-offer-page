import { Box, NoSsr, Stack, useMediaQuery, useTheme } from "@mui/material";
import React, {useEffect} from "react";
import { CustomStackForLoaction } from "../NavBar.style";
import ThemeSwitches from "./ThemeSwitches";
import AddressReselect from "./address-reselect/AddressReselect";
import CustomLanguage from "./language/CustomLanguage";

import { useSelector } from "react-redux";
import CallToAdmin from "../../CallToAdmin";
import CustomContainer from "../../container";
import LogoSide from "../../logo/LogoSide";
import DrawerMenu from "./drawer-menu/DrawerMenu";
import SocialLinks from "./SocialLinks";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const TopNavBar = (props) => {

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

	const {landingPageData } = props;

	const { configData, countryCode, language } = useSelector(
		(state) => state.configData
	);
	const theme = useTheme();
	let location = undefined;
	let zoneid = undefined;
	if (typeof window !== "undefined") {
		location = localStorage.getItem("location");
		zoneid = JSON.parse(localStorage.getItem("zoneid"));
	}
	const isSmall = useMediaQuery("(max-width:1180px)");

	return (
		<>
			<NoSsr>
				<Box
					sx={{
						width: "100%",
						background: (theme) => theme.palette.neutral[100],
						// animation: `fadeIn 0.3s ease-in-out`,
					}}
				>
					{!isSmall && (
						<CustomContainer>
							<Box
								sx={{
									display: isSmall ? "none" : "block",
									borderRadius: "0",
								}}
							>
								<Stack
									pt=".4rem"
									pb=".4rem"
									width="100%"
									height="30px"
									direction="row"
									justifyContent="space-between"
								>
									<CustomStackForLoaction direction="row">
										{location && (
											<AddressReselect location={location} />
										)}
									</CustomStackForLoaction>
									<Stack
										direction="row"
										spacing={3}
										justifyContent="flex-end"
										alignItems="center"
									>
										<ThemeSwitches />
										<CallToAdmin configData={configData} />
										{/* <SocialLinks
                configData={configData}
                // landingPageData={landingPageData}
              /> */}
										{/* <CustomLanguage
											countryCode={countryCode}
											language={language}
										/> */}
									</Stack>
								</Stack>
							</Box>
							{!location && (
								<Box
									sx={{
										display: {
											xs: "flex",
											md: "none",
											alignItems: "center",
											gap: "10px",
											flexDirection: "row",
											justifyContent: " space-between ",
										},
										flexGrow: 1,
									}}
								>
									{/* <Logo src={logoSm.src} /> */}
									<Stack alignItems="center" justifyContent="center">
										<LogoSide width="126px" configData={configData} />
									</Stack>
									<Stack>
										<DrawerMenu />
									</Stack>
								</Box>
							)}
						</CustomContainer>
					)}
				</Box>
			</NoSsr>
		</>
	);
};

export default TopNavBar;
