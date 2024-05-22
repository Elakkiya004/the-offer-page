import React, { useEffect } from "react";
import { NoSsr, Stack, styled } from "@mui/material";
import HeaderComponent from "../header";
import FooterComponent from "../footer";
import PropTypes from "prop-types";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


export const MainLayoutRoot = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
}));

export const LandingLayout = ({ children, configData, landingPageData }) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return (
    <MainLayoutRoot justifyContent="space-between">
      <header>
        <HeaderComponent configData={configData} />
      </header>
      {children}
      <footer>
        <FooterComponent
          configData={configData}
          landingPageData={landingPageData}
        />
      </footer>
    </MainLayoutRoot>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};
