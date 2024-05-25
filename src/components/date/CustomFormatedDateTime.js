import React from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CustomFormatedDateTime = ({ date }) => {

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

  const { configData } = useSelector((state) => state.configData);
  let timeFormat = configData?.timeformat;

  if (timeFormat === "12") {
    return moment(date).format("ll hh:mm a");
  } else {
    return moment(date).format("ll HH:mm");
  }
};

export default CustomFormatedDateTime;
