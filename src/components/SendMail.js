import React, { useEffect } from "react";
import Link from "next/link";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const SendMail = ({ email, children }) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return <Link href={`mailto:${email}`}>{children}</Link>;
};
export default SendMail;
