import React from "react";
import moment from "moment";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


export const CustomDateFormat = (date) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);


  return moment(date).format("ll");
};
