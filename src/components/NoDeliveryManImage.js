/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../assets/img/no-deliveryman-assigned.svg";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const NoDeliveryManImage = () => {

	const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	  };
	  TagManager.initialize(tagManagerArgs);
	
	  useEffect(() => {
		TagManager.dataLayer({
			event: 'pageview',
			path: '/'
		});
	}, []);

	ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

	return (
		<>
			<Image src={img.src} width={190} height={190} alt="" />
		</>
	);
};

export default NoDeliveryManImage;
