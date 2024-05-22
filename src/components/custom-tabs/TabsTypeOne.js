import React from "react";
import { Box } from "@mui/system";
import { Tab } from "@mui/material";
import { CustomTab } from "./tabs.style";
import { setCurrentTab } from "../../redux/slices/utils";
import { useDispatch } from "react-redux";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const TabsTypeOne = (props) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { currentTab, tabs, t, width } = props;
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(setCurrentTab(newValue));
  };

  return (
    <Box>
      <CustomTab
        indicatorColor="secondary"
        value={currentTab}
        onChange={handleChange}
        width={width ? width : "25px !important"}
      >
        {tabs &&
          tabs.length > 0 &&
          tabs.map((item, index) => {
            return (
              <Tab
                sx={{ textTransform: "capitalize" }}
                key={index}
                label={t(item?.title)}
                value={item?.title}
              ></Tab>
            );
          })}
      </CustomTab>
    </Box>
  );
};

TabsTypeOne.propTypes = {};

export default TabsTypeOne;
