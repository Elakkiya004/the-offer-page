import React from "react";
import PropTypes from "prop-types";
import CustomModal from "../../modal";
import { Paper, Typography } from "@mui/material";
import { getAmountWithSign } from "../../../helper-functions/CardHelpers";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
import Form from "./Form";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const LoyaltyModal = (props) => {

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

  const {
    openModal,
    handleClose,
    t,
    theme,
    configData,
    loyalitydata,
    refetch,
    profileRefetch,
  } = props;
  const point = t("points");
  return (
    <CustomModal openModal={openModal} handleClose={handleClose}>
      <Paper sx={{ p: "2rem" }}>
        <CustomStackFullWidth
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ position: "relative" }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              zIndex: "99",
              position: "absolute",
              top: -30,
              right: -25,
              backgroundColor: (theme) => theme.palette.neutral[100],
              borderRadius: "50%",
              [theme.breakpoints.down("md")]: {
                top: -25,
                right: -20,
              },
            }}
          >
            <CloseIcon sx={{ fontSize: "12px", fontWeight: "500" }} />
          </IconButton>
        </CustomStackFullWidth>
        <CustomStackFullWidth spacing={3}>
          <CustomStackFullWidth>
            <Typography
              align="center"
              color={theme.palette.neutral[1000]}
              fontWeight="bold"
              variant="subtitle1"
            >
              {t(
                "Your loyalty point will convert to currency and transfer to wallet"
              )}
            </Typography>
            <Typography
              align="center"
              color="primary.main"
              fontWeight="bold"
              variant="subtitle1"
            >
              {`${
                configData?.loyalty_point_exchange_rate
              } ${point} = ${getAmountWithSign(1)}`}
            </Typography>
          </CustomStackFullWidth>
          <Form
            loyalitydata={loyalitydata}
            configData={configData}
            handleClose={handleClose}
            refetch={refetch}
            profileRefetch={profileRefetch}
            t={t}
          />
        </CustomStackFullWidth>
      </Paper>
    </CustomModal>
  );
};

LoyaltyModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default LoyaltyModal;
