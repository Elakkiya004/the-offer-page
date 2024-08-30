import {
	Box,
	Grid,
	NoSsr,
	alpha,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	CustomBoxFullWidth,
	CustomStackFullWidth,
	SliderCustom,
} from "../../../styled-components/CustomStyles.style";
import CustomImageContainer from "../../CustomImageContainer";
import CustomContainer from "../../container";
import iconicBg from "../assets/hero_background.png";
import HeroLocationForm from "./HeroLocationForm";
import HeroTitleSection from "./HeroTitleSection";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';
import Slider from "react-slick";


const TRACKING_ID = "G-FECBMFT6KW";


const DynamicModuleSelection = dynamic(() =>
	import("./module-selection/ModuleSelectionRaw")
);
const HeroSection = ({ configData, landingPageData, handleOrderNow, isSmall }) => {

	const settings = {
		dots: false,
		infinite: true,
		pauseOnHover: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 3000,
	};

	const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	};
	useEffect(() => {
		if (typeof window !== 'undefined') {
			TagManager.initialize(tagManagerArgs);
			TagManager.dataLayer({
				event: 'pageview',
				path: '/'
			});
		}
		ReactGA.initialize(TRACKING_ID);
		ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
	}, []);

	const theme = useTheme();
	const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const { t } = useTranslation();
	const [currentLocation, setCurrentLocation] = useState(null);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setCurrentLocation(window.localStorage.getItem("location"));
		}
	}, []);

	const renderSlider = (banners, height) => {
		return (
			<SliderCustom>
				<Slider {...settings}>
					{banners.map((item, index) => (
						<Box
							key={index}
							sx={{
								// border: (theme) =>
								// 	`0.828571px solid ${alpha(theme.palette.primary.main, 0.15)}`,
								position: "relative",
								height: {xs: "150px", sm: "350px"}, // Set the height dynamically
								width: "100%",
								borderRadius: "5px",
								overflow: "hidden",
							}}
						>
							<CustomImageContainer
								src={`${landingPageData?.base_urls?.promotional_banner_url}/${item.img}`}
								alt="banners"
								height="100%"
								width="100%"
								objectFit="contain"
								borderRadius="5px"
							/>
						</Box>
					))}
				</Slider>
			</SliderCustom>
		);
	};

	const banners = landingPageData?.promotion_banners;
	const banners1 = landingPageData?.promotion_banners?.filter(item => item.category === 'Category 1');

	return (
		<CustomContainer>
			<CustomBoxFullWidth
				sx={{
					// backgroundColor: 'white',
					marginTop: { xs: "4rem", sm: "5rem", md: "7rem" },
					borderRadius: "20px",
					position: "relative",
					overflow: "hidden",
					".shape img": {
						transition: "all ease-in 1s",
					},
					"&:hover": {
						".shape img": {
							transform: "scale(1.2)",
						},
					},
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={8} md={8}>
						<Box sx={{ position: "absolute" }} className="shape">
							<CustomImageContainer
								src={iconicBg.src}
								alt={t("Background")}
								height="100%"
								width="50%"
								borderRadius="20px"
								objectFit="cover"
							/>
						</Box>
						<Grid container>
							<Grid
								item
								xs={8}
								md={7}
								sx={{ padding: { xs: "1rem", sm: "3rem" }, marginTop: {xs: "", sm: "-40px"} }}
							>
								<NoSsr>
									<HeroTitleSection
										configData={configData}
										landingPageData={landingPageData}
										handleOrderNow={handleOrderNow}
									/>
								</NoSsr>
							</Grid>
							<Grid item xs={4} md={5} align="right">
								<CustomStackFullWidth
									height="100%"
									alignItems="flex-start"
									justifyContent="flex-end"
								>
									<Box
										// sx={{
										// 	height: { xs: "125px", sm: "300px", md: "400px" },
										// 	width: { xs: "70px", sm: "200px", md: "235px" },
										// 	borderTopLeftRadius: "16px",
										// 	borderTopRightRadius: "16px",
										// 	position: "relative",
										// 	zIndex: "99",
										// 	backgroundColor: 'white',
										// 	marginInline: "auto",
										// }}
									>
										{/* <CustomImageContainer
											src={`${landingPageData?.base_urls?.header_banner_url}/${landingPageData?.header_banner}`}
											alt={t("Banner")}
											height="100%"
											width="100%"
											objectFit="cover"
										/> */}
									</Box>
									<Box
										// sx={{
										// 	position: "absolute",
										// 	height: { xs: "52px", sm: "100px", md: "140px" },
										// 	width: { xs: "52px", sm: "100px", md: "150px" },
										// 	bottom: 0,
										// 	right: { xs: 7, sm: 25, md: 30 },
										// }}
									>
										{/* <CustomImageContainer
											src={`${landingPageData?.base_urls?.header_icon_url}/${landingPageData?.header_icon}`}
											alt={t("icon")}
											height="100%"
											width="100%"
											objectFit="cover"
										/> */}
									</Box>
								</CustomStackFullWidth>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={4} md={4}>
						{renderSlider(banners1)}
					</Grid>
				</Grid>
			</CustomBoxFullWidth>
			{isXSmall && (
				<>
					{currentLocation ? (
						<DynamicModuleSelection isSmall />
					) : (
						<CustomStackFullWidth mt="10px">
							<HeroLocationForm />
						</CustomStackFullWidth>
					)}
				</>
			)}

		</CustomContainer>
	);
};

export default HeroSection;
