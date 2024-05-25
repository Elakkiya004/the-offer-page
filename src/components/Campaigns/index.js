import React, { useEffect } from "react";
import {
  CustomPaperBigCard,
  CustomStackFullWidth,
} from "../../styled-components/CustomStyles.style";
import H1 from "../typographies/H1";
import { Grid, Typography } from "@mui/material";
import CampaignCard from "./CampaignCard";
import useGetBasicCampaigns from "../../api-manage/hooks/react-query/useGetBasicCampaigns";
import { Skeleton } from "@mui/material";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CampaignsPage = () => {

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
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Custom Title" });
  }, []);

  const { data, refetch, isLoading, isFetching } = useGetBasicCampaigns();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <CustomStackFullWidth>
      <CustomPaperBigCard>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <H1 text="Campaigns" />
          </Grid>

          {data?.length > 0 &&
            data?.map((camp, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CampaignCard data={camp} />
              </Grid>
            ))}
          {isLoading && (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangle" width="100%" height="400px" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangle" width="100%" height="400px" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangle" width="100%" height="400px" />
              </Grid>
            </>
          )}
        </Grid>
      </CustomPaperBigCard>
    </CustomStackFullWidth>
  );
};

export default CampaignsPage;
