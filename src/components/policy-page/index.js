import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import H1 from "../typographies/H1";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import { Skeleton } from "@mui/material";
import { isObjectEmpty } from "../../utils/CustomFunctions";
import CustomContainer from "../container";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

export const PolicyShimmer = () => (
  <CustomStackFullWidth>
    <Skeleton variant="text" width="100%" height="20px" />
    <Skeleton variant="text" width="70%" height="20px" />
    <Skeleton variant="text" width="50%" height="20px" />
  </CustomStackFullWidth>
);
const PolicyPage = (props) => {

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

  const { title, data, isFetching } = props;
  return (
    <CustomContainer>
      <Box minHeight="80vh">
        <Grid container item md={12} xs={12} spacing={3} mt="1rem">
          <Grid
            item
            md={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            <H1 text={title} />
          </Grid>
          <Grid item md={12} xs={12} sx={{ paddingBottom: "50px" }}>
            <Box>
              {isFetching ? (
                <PolicyShimmer />
              ) : (
                data &&
                !isObjectEmpty(data) && (
                  <div dangerouslySetInnerHTML={{ __html: data }}></div>
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};

export default PolicyPage;
