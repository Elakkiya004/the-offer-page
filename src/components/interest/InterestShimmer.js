import React from "react";
import {
  CustomPaperBigCard,
  CustomStackFullWidth,
} from "../../styled-components/CustomStyles.style";
import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const InterestShimmer = (props) => {

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

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container spacing={2}>
      {[...Array(16)].map((item, index) => {
        return (
          <Grid item xs={6} sm={3} md={2} lg={2} align="center" key={index}>
            <CustomPaperBigCard padding=".5rem">
              <CustomStackFullWidth spacing={1} alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={isSmall ? "100px" : "150px"}
                />
                <Skeleton variant="text" width="100px" />
              </CustomStackFullWidth>
            </CustomPaperBigCard>
          </Grid>
        );
      })}
    </Grid>
  );
};

InterestShimmer.propTypes = {};

export default InterestShimmer;
