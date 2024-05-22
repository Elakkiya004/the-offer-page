import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useSelector } from "react-redux";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const DynamicFavicon = ({configData}) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);


  //const { configData } = useSelector((state) => state.configData);
  const businessLogo = configData?.base_urls?.business_logo_url;

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${businessLogo}/${configData?.fav_icon}`}
      />
      <link rel="icon" href={`${businessLogo}/${configData?.fav_icon}`} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${businessLogo}/${configData?.fav_icon}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${businessLogo}/${configData?.fav_icon}`}
      />
    </Head>
  );
};

DynamicFavicon.propTypes = {};

export default DynamicFavicon;
