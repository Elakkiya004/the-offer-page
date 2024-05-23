import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { styled } from "@mui/material";
import CustomImageContainer from "../CustomImageContainer";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";



export const Logo = styled("div")(({ theme, height, width }) => ({
  width: width,
  height: height,
  justifyContent: "center",

  position: "relative",
  cursor: "pointer",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contained",
  },
}));
const CustomLogo = ({ logoImg, atlText, height, width, objectFit }) => {

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

  const router = useRouter();
  let location = undefined;
  if (typeof window !== "undefined") {
    location = localStorage.getItem("location");
  }
  const handleClick = () => {
    if (router.pathname === "/") {
      if (location) {
        router.replace("/home", undefined, { shallow: true });
      } else {
        router.push("/", undefined, { shallow: true });
      }
    } else {
      router.replace("/home", undefined, { shallow: true }).then();
    }
  };
  return (
    <Logo height={height} width={width} onClick={() => handleClick()}>
      <CustomImageContainer
        src={logoImg}
        alt={atlText}
        objectfit={objectFit ? objectFit : "contain"}
      />
    </Logo>
  );
};
export default CustomLogo;
