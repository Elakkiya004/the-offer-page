import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

export const ReadMore = ({ children, limits, color }) => {

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

  const fontLimits = limits ? limits : 70;
  const theme = useTheme();
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const fontColor = theme.palette.primary.main;
  return (
    <Typography
      component="span"
      fontSize={{ xs: "10px", sm: "14px", md: "14px" }}
      fontWeight="400"
      color={color ? color : theme.palette.neutral[600]}
      sx={{
        wordWrap: "break-word"
      }}
    >
      {isReadMore ? text?.slice(0, fontLimits) : text}
      {text?.length > fontLimits && (
        <span
          onClick={toggleReadMore}
          style={{ cursor: "pointer", color: fontColor }}
        >
          {isReadMore ? "...Read more" : " Show less"}
        </span>
      )}
    </Typography>
  );
};
