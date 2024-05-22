import React, { useEffect } from "react";
import CustomLogo from "./CustomLogo";
import { Stack } from "@mui/system";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const LogoSide = ({ configData, width, height, objectFit }) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const businessLogo = configData?.base_urls?.business_logo_url;

  return (
    <Stack
      direction="row"
      alignItems="center"
      width="150px"
      justifyContent="flex-start"
    >
      <CustomLogo
        atlText="logo"
        logoImg={`${businessLogo}/${configData?.logo}`}
        //height="1.5rem"
        width={width}
        height={height}
        objectFit={objectFit}
      />
    </Stack>
  );
};

LogoSide.propTypes = {};

export default LogoSide;
