/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../assets/img/no-deliveryman-assigned.svg";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const NoDeliveryManImage = () => {

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
