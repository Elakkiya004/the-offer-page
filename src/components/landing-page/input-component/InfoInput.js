import { useTheme } from "@emotion/react";
import { Paper, InputBase, Button, IconButton,Grid,TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { onErrorResponse } from "../../../api-manage/api-error-response/ErrorResponses";
import { usePostNewsletterEmail } from "../../../api-manage/hooks/react-query/newsletter/usePostNewsletterEmail";
import { getCurrentModuleType } from "../../../helper-functions/getCurrentModuleType";
import { ModuleTypes } from "../../../helper-functions/moduleTypes";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const styles = theme => ({
    multilineColor:{
        color:'red'
    }
});
const InfoInput = () => {
  const [emailAddress, setEmailAddress] = useState(null);
  const { t } = useTranslation();
  const { mutate, isLoading } = usePostNewsletterEmail();
  const theme = useTheme();

  const handleSuccess = () => {
    toast.success(t("Subscribed Successfully"), {
      id: "subscribed-toaster",
    });
    setEmailAddress("");
  };

  const handleSubmit = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(emailAddress) === true) {
      mutate(
        { email: emailAddress },
        {
          onSuccess: handleSuccess,
          onError: onErrorResponse,
        }
      );
    } else {
      toast.error(t("Please insert a valid email."), {
        id: "subscribed-email-error",
      });
    }
  };
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          sx={{
            color: "black",
            height: "48px",
         
            input: {
                background: "white",
                borderRadius:'10px'
            }
          }}
          
          type="text"
          name="company_name"
          placeholder="Company Name"
        />
      </Grid>
      <Grid item>
        <TextField
          sx={{
            color: "black",
            height: "48px",
            
            input: {
                background: "white",
                borderRadius:'10px'
            }
          }}
          type="phone number"
          name="phone number"
          placeholder="Mobile Number"
         
        />
      </Grid>
      <Grid item>
      <Button
    variant="contained"
    sx={{
      height: '48px',
      px: '50px'
    }}
    component="a"
    href="mailto:store@theofferpage.in"
    startIcon={<MailOutlineIcon />} 
  >
    Try it free
  </Button>
      </Grid>
    </Grid>
  );
};

export default InfoInput;
