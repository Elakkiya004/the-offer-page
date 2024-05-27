import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import { IsSmallScreen } from "../../utils/CommonValues";
import CustomImageContainer from "../CustomImageContainer";
import promotionalBanner from "./assets/promotional_banner.png";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


export const BannerWrapper = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "360px",
	position: "relative",
	marginTop: "20px",
	[theme.breakpoints.down("sm")]: {
		height: "120px",
	},
}));
export const ContentWrapper = styled(CustomStackFullWidth)(({ theme }) => ({
	position: "absolute",
	top: 0,
}));
export const CustomTypography = styled(Typography)(({ theme }) => ({
	fontFamily: "Quicksand",
	fontWeight: "700",
	fontSize: "16px",
	// lineHeight: "48px",
	[theme.breakpoints.up("sm")]: {
		fontSize: "2.5rem",
	},
}));
export const CustomButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.customType2,
	marginTop: "10px",
}));

const PromotionalBanner = ({ bannerData }) => {

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

	const { t } = useTranslation();
	const data = {
		img: promotionalBanner,
		offerType: "Summer offer",
		header: "Up To 50% Off All Product.",
		subHeader: "We provide best quality & fresh grocery items",
	};
	return (
		<>{bannerData?.bottom_section_banner &&
			<BannerWrapper>
				<CustomImageContainer
					src={`${bannerData?.promotional_banner_url}/${bannerData?.bottom_section_banner}`}
					height="100%"
					width="100%"
					// borderRadius={IsSmallScreen() ? "0px" : ".7rem"}
					objectFit="cover"
				/>
			</BannerWrapper>
		}
		</>
	);
};

PromotionalBanner.propTypes = {};

export default PromotionalBanner;
