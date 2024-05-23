import React, { useEffect } from "react";
import {Button, IconButton, Stack, Typography} from "@mui/material";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const RecentSearches = ({
  list,
  t,
  handleSearchHistoryOnClick,
  handleDeleteAble,clearAll
}) => {


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

  return (
    <Stack spacing={1}>
    <Stack direction="row" justifyContent="space-between">
        <Typography
            sx={{ my: "10px", color: (theme) => theme.palette.neutral[500] }}
        >
            {t("Recent Searches")}
        </Typography>
        <Button onClick={clearAll}>{t("Clear All")}</Button>
    </Stack>
      <CustomStackFullWidth>
        {list
          .slice(0, 5)
          .reverse()
          .map((item, index) => {
            return (
              <CustomStackFullWidth
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                key={index}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  onClick={() => handleSearchHistoryOnClick(item)}
                  sx={{ cursor: "pointer" }}
                >
                  <SearchIcon sx={{ fontSize: "18px" }} />
                  <Typography
                    sx={{ color: (theme) => theme.palette.neutral[700] }}
                  >
                    {item}
                  </Typography>
                </Stack>
                <IconButton sx={{ borderRadius: "50%" }}>
                  <CloseIcon
                    onClick={() => handleDeleteAble(item)}
                    sx={{
                      color: (theme) => theme.palette.neutral[400],
                      fontSize: "18px",
                    }}
                  />
                </IconButton>
              </CustomStackFullWidth>
            );
          })}
      </CustomStackFullWidth>
    </Stack>
  );
};

export default RecentSearches;
