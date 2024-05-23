import React, { useEffect, useState } from "react";
import { AppBarStyle } from "./NavBar.style";

import {Box, Card, useMediaQuery, useScrollTrigger, useTheme} from "@mui/material";
import { useRouter } from "next/router";
import TopNavBar from "../header/top-navbar/TopNavBar";
import SecondNavBar from "../header/second-navbar/SecondNavbar";
import { debounce } from "lodash";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const HeaderComponent = ({ configData }) => {

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
  const theme=useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const scrolling = useScrollTrigger()

  return (
      <AppBarStyle scrolling={scrolling}
                   isSmall={isSmall}
      >
        {router.pathname === "/" ? (
            <Box
            ><TopNavBar configData={configData} />
              <SecondNavBar configData={configData} />
            </Box>
        ) : (
            <>
              <Card
                  sx={{
                    boxShadow: "none",
                  }}
              >
                <TopNavBar configData={configData} />
              </Card>
              <SecondNavBar configData={configData} />
            </>
        )}
      </AppBarStyle>
  );
};

export default HeaderComponent;