import { useEffect } from "react";
import { withRouter } from "next/router";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


function ScrollToTop({ router }) {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return null;
}

export default withRouter(ScrollToTop);
