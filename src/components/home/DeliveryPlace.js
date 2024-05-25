import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CustomStackForLoaction } from "../../styled-components/CustomStyles.style";
import RoomIcon from "@mui/icons-material/Room";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import AddressReselect from "../header/top-navbar/address-reselect/AddressReselect";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const DeliveryPlace = () => {

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
  const router = useRouter();
  const theme = useTheme();
  let zoneid = undefined;
  let location = undefined;

  if (typeof window !== "undefined") {
    zoneid = localStorage.getItem("zoneid");

    location = localStorage.getItem("location");
  }

  return (
    <Stack pb="10px">
      <Typography align="center" color={theme.palette.neutral[500]}>
        {t("Delivering to")}:{" "}
      </Typography>
      <CustomStackForLoaction direction="row" spacing={1}>
        {location && <AddressReselect location={location} />}
      </CustomStackForLoaction>
    </Stack>
  );
};
export default DeliveryPlace;
