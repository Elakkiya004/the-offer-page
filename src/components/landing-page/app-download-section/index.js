import React from "react";
import {
  alpha,
  Box,
  Button,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import CustomContainer from "../../container";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
import LargerScreen from "./LargerScreen";
import SmallerScreen from "./SmallerScreen";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';


const TRACKING_ID = "G-FECBMFT6KW";


const Wrapper = styled(Box)(({ theme }) => ({
  background: `linear-gradient(112.54deg, rgba(255, 255, 255, 0.2) 0%, rgba(153, 245, 202, 0.2) 33.19%, ${alpha(
      theme.palette.primary.main,
      0.2
  )} 66.37%, rgba(255, 255, 255, 0.2) 99.56%)`,
  width: "100%",
  position: "relative",
}));
export const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  maxWidth: "400px",
  background: `linear-gradient(132.58deg, ${theme.palette.primary.customType1} 0%, #960000 51.01%)`,
  color: theme.palette.whiteContainer.main,
}));

const AppDownloadSection = ({ configData, landingPageData }) => {

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

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const primaryColor = theme.palette.primary.dark;
  const { t } = useTranslation();
  const goToApp = (s) => {
    window.open(s);
  };
  return (
      <Wrapper>
        <CustomContainer>
          <CustomStackFullWidth>
            {isSmall ? (
                <SmallerScreen
                    theme={theme}
                    landingPageData={landingPageData}
                    goToApp={goToApp}
                    t={t}
                />
            ) : (
                <LargerScreen
                    landingPageData={landingPageData}
                    goToApp={goToApp}
                    t={t}
                />
            )}
          </CustomStackFullWidth>
        </CustomContainer>
      </Wrapper>
  );
};

AppDownloadSection.propTypes = {};

export default AppDownloadSection;
