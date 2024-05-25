import React, { useEffect } from "react";
import { CustomBadgeWrapepr } from "../cards/CustomBadge";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const OrganicTag = (props) => {

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

  const { status, top, left } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <>
      {status === 1 ? (
        <CustomBadgeWrapepr
          bg_color={theme.palette.primary.main}
          top={top}
          left={left}
          border_radius="0px 4px 4px 0px"
        >
          {t("Organic")}
        </CustomBadgeWrapepr>
      ) : null}
    </>
  );
};

OrganicTag.propTypes = {};

export default OrganicTag;
