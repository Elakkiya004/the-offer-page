import React from "react";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Card } from "./featured-categories/card";
import { ButtonLeft, ButtonRight } from "./featured-categories";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const SliderShimmer = () => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return (
    <CustomStackFullWidth spacing={3}>
      <CustomStackFullWidth
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      ></CustomStackFullWidth>
      <CustomStackFullWidth direction="row" alignItems="center" spacing={1}>
        {[...Array(6)].map((item, index) => (
          <Card key={index}>
            <Skeleton width="100%" height="100%" variant="rectangle" />
          </Card>
        ))}
      </CustomStackFullWidth>
    </CustomStackFullWidth>
  );
};

export default SliderShimmer;
