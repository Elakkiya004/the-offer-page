import React, { useEffect } from "react";
import {
  CustomPaperBigCard,
  CustomStackFullWidth,
} from "../../styled-components/CustomStyles.style";
import ReviewLists from "./ReviewLists";
import H1 from "../typographies/H1";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const ReviewPage = ({ id }) => {

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
