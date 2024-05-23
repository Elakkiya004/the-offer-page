import React, { useEffect } from "react";
import { Stack, styled } from "@mui/system";
import { useTheme } from "@mui/material";
import {getModule} from "../helper-functions/getLanguage";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


export const CustomSpinner = styled(Stack)(({ theme, color }) => ({
  position: "relative",
  width: "10px",
  height: "10px",
  borderRadius: "5px",
  backgroundColor: "transparent",
  color: "transparent",
  boxShadow:
    "0 -18px 0 0 ${color}, 12.727926px -12.727926px 0 0 ${color}, 18px 0 0 0 ${color}, 12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0), 0 18px 0 0 rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0), -18px 0 0 0 rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0)",
  animation: "dots-pin 1.5s infinite linear",
  "@Keyframes dots-pin": {
    "0%": {
      boxShadow: `0 -18px 0 0 ${color}, 12.727926px -12.727926px 0 0 ${color}, 18px 0 0 0 ${color}, 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0)`,
    },
    "100%": {
      boxShadow: `0 -18px 0 0 ${color}, 12.727926px -12.727926px 0 0 ${color}, 18px 0 0 0 ${color}, 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0)`,
    },
    "12.5%": {
      boxShadow: `0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 0 ${color}, 18px 0 0 0 ${color}, 12.727926px 12.727926px 0 0 ${color}, 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0)`,
    },
    "25%": {
      boxShadow: `0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 ${color}, 12.727926px 12.727926px 0 0 ${color}, 0 18px 0 0 ${color}, -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0)`,
    },
    "37.5%": {
      boxShadow: `0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 0 ${color}, 0 18px 0 0 ${color}, -12.727926px 12.727926px 0 0 ${color}, -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0)`,
    },
    "50%": {
      boxShadow: `0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 ${color}, -12.727926px 12.727926px 0 0 ${color}, -18px 0 0 0 ${color}, -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0)`,
    },
    "62.5%": {
      boxShadow: `0 -18px 0 -5px rgba(152, 128, 255, 0), 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 0 ${color}, -18px 0 0 0 ${color}, -12.727926px -12.727926px 0 0 ${color}`,
    },
    "75%": {
      boxShadow: `0 -18px 0 0 ${color}, 12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 0 ${color}, -12.727926px -12.727926px 0 0 ${color}`,
    },
    "87.5%": {
      boxShadow: `0 -18px 0 0 ${color}, 12.727926px -12.727926px 0 0 ${color}, 18px 0 0 -5px rgba(152, 128, 255, 0), 12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 -5px rgba(152, 128, 255, 0), -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0), -18px 0 0 -5px rgba(152, 128, 255, 0), -12.727926px -12.727926px 0 0 ${color}`,
    },
  },
}));
const DotSpin = () => {

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

  const theme = useTheme();

  return (
    <Stack width="100%" justifyContent="Center" alignItems="center">
      <CustomSpinner
        color={
          getModule()?.module_type === "food"
            ? theme.palette.moduleTheme.food
            : theme.palette.primary.main
        }
      ></CustomSpinner>
    </Stack>
  );
};

export default DotSpin;
