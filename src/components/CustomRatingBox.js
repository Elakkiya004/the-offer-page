import { useTheme } from "@emotion/react";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { getCurrentModuleType } from "../helper-functions/getCurrentModuleType";
import { ModuleTypes } from "../helper-functions/moduleTypes";
import { IsSmallScreen } from "../utils/CommonValues";
import { useSelector } from "react-redux";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CustomRatingBox = (props) => {

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

  const { rating } = props;
  const { configData } = useSelector((state) => state.configData);
  const getRating = () => {
    return rating.toFixed(configData?.digit_after_decimal_point);
  };
  const theme = useTheme();
  const getModuleWise = () => {
    switch (getCurrentModuleType()) {
      case ModuleTypes.GROCERY:
        return {
          background: "primary.main",
          color: "whiteContainer.main",
          borderRadius: "2px",
        };
      case ModuleTypes.PHARMACY:
        return {
          background: "primary.lite",
          color: "primary.main",
          borderRadius: "14px",
        };
      case ModuleTypes.ECOMMERCE:
        return {
          background: "primary.lite",
          color: "primary.main",
          borderRadius: "2px",
        };
      case ModuleTypes.FOOD:
        return {
          background: theme.palette.moduleTheme.food,
          color: "whiteContainer.main",
          borderRadius: "2px",
        };
    }
  };
  return (
    <Stack
      width="50px"
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={0.6}
      sx={{
        color: getModuleWise()?.color,
        backgroundColor: getModuleWise()?.background,
        borderRadius: getModuleWise()?.borderRadius,
        height: "20px",
      }}
    >
      <StarIcon
        sx={{
          paddingBottom: "3px",
          fontSize: IsSmallScreen() ? "12px" : "14px",
          display: "inline-flex",
          height: "unset",
        }}
      />
      <Typography variant={IsSmallScreen() ? "body3" : "body1"}>
        {getRating()}
      </Typography>
    </Stack>
  );
};

CustomRatingBox.propTypes = {};

export default CustomRatingBox;
