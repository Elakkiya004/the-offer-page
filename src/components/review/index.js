import React from "react";
import {
  CustomPaperBigCard,
  CustomStackFullWidth,
} from "../../styled-components/CustomStyles.style";
import ReviewLists from "./ReviewLists";
import H1 from "../typographies/H1";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const ReviewPage = ({ id }) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return (
    <CustomStackFullWidth mt="1rem">
      <CustomPaperBigCard>
        <CustomStackFullWidth spacing={4}>
          <H1 text="Reviews" textAlign="left" />
          <ReviewLists id={id} />
        </CustomStackFullWidth>
      </CustomPaperBigCard>
    </CustomStackFullWidth>
  );
};

export default ReviewPage;
