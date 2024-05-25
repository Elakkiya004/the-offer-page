import React, { useEffect } from "react";
import CustomImageContainer from "../CustomImageContainer";
import { Typography } from "@mui/material";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const AuthHeader = ({ title, configData }) => {

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

  const businessLogo = configData?.base_urls?.business_logo_url;
  let zoneid = undefined;
  if (typeof window !== "undefined") {
    zoneid = localStorage.getItem("zoneid");
  }
  const router = useRouter();
  const handleLogoClick = () => {
    if (router.pathname.includes("/auth")) {
      router.push("/home", undefined, { shallow: true });
    }
  };
  return (
    <CustomStackFullWidth
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Box onClick={handleLogoClick}>
        <CustomImageContainer
          width="150px"
          height="50px"
          objectfit="cover"
          src={`${businessLogo}/${configData?.logo}`}
        />
      </Box>

      <Typography variant="h4" textTransform="uppercase">
        {title}
      </Typography>
    </CustomStackFullWidth>
  );
};

export default AuthHeader;
