import React from "react";
import PropTypes from "prop-types";
import { SideDrawerWrapper } from "./CustomSideDrawer.style";
import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const CustomDrawerForSidebar = styled(Drawer)(
  ({ theme, height, width, maxWidth }) => ({
    zIndex: theme.zIndex.appBar + 100,
    maxWidth: maxWidth,
    width: width,
    height: height,

    "& .MuiDrawer-paper": {
      maxWidth: maxWidth,
      width: width,
      height: height,
    },
  })
);

const CustomSideDrawer = (props) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { open, onClose, children, anchor, width, height, maxWidth } = props;

  return (
    <CustomDrawerForSidebar
      maxWidth={maxWidth}
      width={width}
      height={height}
      anchor={anchor}
      open={open}
      onClose={onClose}
      variant="temporary"
    >
      <SideDrawerWrapper maxWidth={maxWidth}>{children}</SideDrawerWrapper>
    </CustomDrawerForSidebar>
  );
};

CustomSideDrawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomSideDrawer;
