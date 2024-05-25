import React, {useEffect} from "react";
import {
  StyledFooterBackground,
  StyledFooterTopContainer,
} from "./Footer.style";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import FooterBottom from "./FooterBottom";
import FooterTop from "./footer-top/FooterTop";
import FooterMiddle from "./footer-middle/FooterMiddle";
import { useRouter } from "next/router";
import CustomContainer from "../container";
import { useTheme } from "@emotion/react";
import NewsLetter from "../newsletter";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

const TRACKING_ID = "G-FECBMFT6KW";


const FooterComponent = (props) => {

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


  const { configData, landingPageData } = props;
  const router = useRouter();
  const isLandingPage = router.pathname === "/" ? "true" : "false";
  const theme = useTheme()
  return (
    <CustomStackFullWidth
      sx={{
        mt: {
          xs: "6rem",
          sm: "3rem",
          md: router.pathname === "/" ? "2rem" : "6rem",
        },
      }}
    >
      {/* newletter */}
      {/* <FooterTop landingPageData={landingPageData} /> */}
      <NewsLetter/><hr></hr>
      <StyledFooterBackground
        nobottommargin={isLandingPage}
      >
        <CustomStackFullWidth
          height="100%"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <CustomContainer>
            <CustomStackFullWidth spacing={3}>
              <FooterMiddle
                configData={configData}
                landingPageData={landingPageData}
              />
            </CustomStackFullWidth>
          </CustomContainer>
          <FooterBottom configData={configData} />
        </CustomStackFullWidth>
      </StyledFooterBackground>
    </CustomStackFullWidth>
  );
};

export default FooterComponent;
