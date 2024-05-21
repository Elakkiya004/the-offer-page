import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import { Stack } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import {
  CustomButtonCancel,
  CustomButtonSuccess,
} from "../../../styled-components/CustomButtons.style";
import { WrapperForCustomDialogConfirm } from "./CustomDialogConfirm.style";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const CustomDialogConfirmStyle = (props) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);


  const { open, onClick, onClose, onSuccess, dialogTexts, isLoading } = props;

  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <WrapperForCustomDialogConfirm>
        <Stack alignItems="center" justifyContent="center">
          {/*<ImageContainer>*/}
          {/*    <img src={confirmIcon} alt="closeIcon" />*/}
          {/*</ImageContainer>*/}
          <DialogTitle id="alert-dialog-title">
            <Typography variant="h6" textAlign="center">
              {dialogTexts ? t(dialogTexts) : t("Confirm this request?")}
            </Typography>
          </DialogTitle>
        </Stack>
        <DialogActions>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
            spacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <CustomButtonCancel variant="contained" onClick={onClose}>
              {t("Cancel")}
            </CustomButtonCancel>
            <CustomButtonSuccess
              loading={isLoading}
              variant="contained"
              onClick={onSuccess}
            >
              {t("Yes")}
            </CustomButtonSuccess>
          </Stack>
        </DialogActions>
      </WrapperForCustomDialogConfirm>
    </Dialog>
  );
};

CustomDialogConfirmStyle.propTypes = {};

export default CustomDialogConfirmStyle;
