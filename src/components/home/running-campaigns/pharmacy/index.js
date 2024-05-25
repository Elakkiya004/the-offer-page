import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import { SliderCustom } from "../../../../styled-components/CustomStyles.style";
import CustomImageContainer from "../../../CustomImageContainer";
import { settings } from "./sliderSettings";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const ImageWrapper = styled(Box)(({ theme }) => ({
	height: "160px",
	"&:hover img": {
		transform: "scale(1.1)rotate(4deg)",
	},
}));
const Pharmacy = (props) => {

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

	const { runningCampaigns, handleClick, configData, isFetching } = props;
	return (
		<SliderCustom>
			<Slider {...settings}>
				{runningCampaigns?.length > 0 &&
					runningCampaigns?.map((item, index) => {
						return (
							<ImageWrapper
								key={index}
								sx={{ cursor: "pointer" }}
								onClick={() => handleClick(item)}
							>
								<CustomImageContainer
									src={`${configData?.base_urls?.campaign_image_url}/${item?.image}`}
									alt={item?.title}
									height="100%"
									width="100%"
									objectfit="cover"
									borderRadius="8px"
								/>
							</ImageWrapper>
						);
					})}
			</Slider>
		</SliderCustom>
	);
};

Pharmacy.propTypes = {};

export default Pharmacy;
