import React, { useEffect } from "react";
import { Stack } from "@mui/system";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const CustomScrollBar = ({ popOverHeightHandler }) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return <Stack sx={{}}></Stack>;
};

export default CustomScrollBar;
