import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Rating, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Body2 from "./typographies/Body2";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

export const StyledRating = styled(Rating)(({ theme, primary_color }) => ({
  "& .MuiRating-iconFilled": {
    color: primary_color === "true" && theme.palette.primary.main,
  },
}));
const CustomMultipleRatings = (props) => {

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

  const { rating, PrimaryColor, withCount } = props;
  const handleRating = (rating) => {
    return `(${rating})`;
  };
  return (
    <>
      {withCount ? (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={0.4}
        >
          <StyledRating
            primary_color={PrimaryColor ? "true" : "false"}
            name="read-only"
            value={rating}
            readOnly
            sx={{ fontSize: { xs: "18px", md: "22px" } }}
          />
          <Body2 text={handleRating(rating)} />
        </Stack>
      ) : (
        <StyledRating
          primary_color={PrimaryColor ? "true" : "false"}
          name="read-only"
          value={rating}
          readOnly
          sx={{ fontSize: { xs: "18px", md: "17px" } }}
        />
      )}
    </>
  );
};

CustomMultipleRatings.propTypes = {};

export default CustomMultipleRatings;
