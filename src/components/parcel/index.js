import React, { useEffect } from "react";
import ParcelHero from "./ParcelHero";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import ParcelCategory from "./parcel-category/ParcelCategory";
import TopBanner from "../home/top-banner";
import SearchWithTitle from "../home/SearchWithTitle";
import CustomContainer from "../container";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const PercelComponents = () => {

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

  useEffect(() => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);
  let zoneid = undefined;
  if (typeof window !== "undefined") {
    zoneid = localStorage.getItem("zoneid");
  }
  let token = undefined;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  return (
    <CustomStackFullWidth>
      <CustomStackFullWidth sx={{ position: "relative" }}>
        <TopBanner />
        <CustomStackFullWidth
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "absolute",
            top: 0,
            height: "100%",
          }}
        >
          <SearchWithTitle zoneid={zoneid} token={token} />
        </CustomStackFullWidth>
        {/* <ParcelHero /> */}
      </CustomStackFullWidth>
      <CustomContainer>
        <ParcelCategory />
      </CustomContainer>
    </CustomStackFullWidth>
  );
};

export default PercelComponents;
