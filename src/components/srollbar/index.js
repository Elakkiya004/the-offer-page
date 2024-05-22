import React, { forwardRef } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


import { styled } from "@mui/material/styles";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
const ScrollbarRoot = styled(SimpleBar)``;

// eslint-disable-next-line react/display-name
export const Scrollbar = forwardRef((props, ref) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return <ScrollbarRoot ref={ref} {...props} />;
});
