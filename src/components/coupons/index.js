import React, { useEffect, useState } from "react";
import useGetCoupons from "../../api-manage/hooks/react-query/useGetCoupons";
import { Box, Stack } from "@mui/system";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CustomEmptyResult from "../custom-empty-result";
import nodataimage from "../../../public/static/nodata.png";
import Coupon from "./Coupon";
import CustomShimmerCard from "./Shimmer";
import { t } from "i18next";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const Coupons = (props) => {

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
  const { data, refetch, isLoading } = useGetCoupons();
  const [copy, setCopy] = useState(null);
  useEffect(() => {
    refetch();
  }, []);

  return (
    <Box
      mt={{ xs: "1rem", md: "2rem" }}
      minHeight="60vh"
      paddingLeft={{ xs: "10px", sm: "20px", md: "25px" }}
      paddingRight={{ xs: "10px", sm: "20px", md: "40px" }}
    >
      <Grid container spacing={2}>
        {isSmall && (
          <Grid item xs={12}>
            {isSmall && (
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  textTransform="capitalize"
                  fontWeight="700"
                  fontSize="16px"
                >
                  {t("Coupons")}
                </Typography>
                {/*<InfoOutlinedIcon />*/}
              </Stack>
            )}
          </Grid>
        )}
        {data &&
          data?.length > 0 &&
          data?.map((coupon, index) => {
            return (
              <Grid item sm={6} xs={12} md={4} key={index}>
                <Coupon
                  coupon={coupon}
                  isLoading={isLoading}
                  setCopy={setCopy}
                  copy={copy}
                />
              </Grid>
            );
          })}
        {data && data.length === 0 && (
          <CustomEmptyResult label="No Coupon Found" image={nodataimage} />
        )}
        {isLoading && <CustomShimmerCard />}
      </Grid>
    </Box>
  );
};

Coupons.propTypes = {};

export default Coupons;
