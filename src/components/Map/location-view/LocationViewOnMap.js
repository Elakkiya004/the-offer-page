import React, { useEffect } from "react";
import CustomModal from "../../modal";
import { IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
import MapComponent from "./MapComponent";
import { Box } from "@mui/system";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const LocationViewOnMap = (props) => {

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

  const { open, handleClose, latitude, longitude, address } = props;
  return (
    <CustomModal openModal={open} handleClose={handleClose}>
      <Paper
        sx={{
          position: "relative",
          width: { xs: "300px", sm: "450px", md: "550px", lg: "600px" },
          p: "1.5rem",
        }}
      >
        <IconButton
          onClick={() => handleClose()}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon sx={{ fontSize: "16px" }} />
        </IconButton>
        <CustomStackFullWidth sx={{ position: "relative" }}>
          <MapComponent latitude={latitude} longitude={longitude} />
          <Box
            sx={{
              backgroundColor: "background.paper",
              position: "absolute",
              right: "10px",
              px: "20px",
              py: "10px",
              bottom: 0,
              left: "10px",
              my: "10px",
            }}
          >
            {address}
          </Box>
        </CustomStackFullWidth>
      </Paper>
    </CustomModal>
  );
};

LocationViewOnMap.propTypes = {};

export default LocationViewOnMap;
