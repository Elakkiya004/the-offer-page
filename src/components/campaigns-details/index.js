import React from "react";
import {
  CustomPaperBigCard,
  CustomStackFullWidth,
} from "../../styled-components/CustomStyles.style";
import CustomImageContainer from "../CustomImageContainer";
import { Stack } from "@mui/material";
import MiddleSection from "./MiddleSection";
import ItemSection from "./ItemSection";
import {useTheme} from "@emotion/react";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const CampaignsDetails = ({
  campaignsDetails,
  configData,
  isRefetching,
  isLoading,
}) => {

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
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Custom Title" });
  }, []);

  const theme=useTheme()
  const camImage = `${configData?.base_urls?.campaign_image_url}/${campaignsDetails?.image}`;
  return (
    <CustomStackFullWidth pt="20px">
      <Stack spacing={3} justifyContent="center" alignItems="center">
        <CustomImageContainer
          src={camImage}
          width="100%"
          height="300px"
          smHeight="150px"
          objectfit="cover"
          borderRadius=".5rem"
        />
        <CustomPaperBigCard backgroundcolor={theme.palette.background.custom2}>
          <CustomStackFullWidth spacing={{ xs: 1, md: 3 }}>
            <MiddleSection
              campaignsDetails={campaignsDetails}
              image={camImage}
            />
            <ItemSection
              campaignsDetails={campaignsDetails}
              isLoading={isLoading}
              isRefetching={isRefetching}
            />
          </CustomStackFullWidth>
        </CustomPaperBigCard>
      </Stack>
    </CustomStackFullWidth>
  );
};

export default CampaignsDetails;
