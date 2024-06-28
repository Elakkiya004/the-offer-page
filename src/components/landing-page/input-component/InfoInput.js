import { useTheme } from "@emotion/react";
import { Paper, InputBase, Button, IconButton,Grid,TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { onErrorResponse } from "../../../api-manage/api-error-response/ErrorResponses";
import { usePostNewsletterEmail } from "../../../api-manage/hooks/react-query/newsletter/usePostNewsletterEmail";
import { getCurrentModuleType } from "../../../helper-functions/getCurrentModuleType";
import { ModuleTypes } from "../../../helper-functions/moduleTypes";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const styles = theme => ({
    multilineColor:{
        color:'red'
    }
});
const InfoInput = ({ email, children }) => {

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

  

  // const [emailAddress, setEmailAddress] = useState(null);
  // const { t } = useTranslation();
  // const { mutate, isLoading } = usePostNewsletterEmail();
  // const theme = useTheme();

  // const [companyName, setCompanyName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  // const handleTryItFree = async () => {
  //   try {
  //     // Send a POST request to your backend API to handle email sending
  //       const response = await axios.post("info@theofferpage.in", {
  //       companyName,
  //       phoneNumber,
  //       recipientEmail: "store@theofferpage.in"
  //     });
  //     if (response.status === 200) {
  //       toast.success("Email sent successfully!");
  //       // Reset input fields after successful submission
  //       setCompanyName("");
  //       setPhoneNumber("");
  //     } else {
  //       toast.error("Failed to send email.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     toast.error("Failed to send email.");
  //   }
  // };

  // const handleSuccess = () => {
  //   toast.success(t("Subscribed Successfully"), {
  //     id: "subscribed-toaster",
  //   });
  //   setEmailAddress("");
  // };

  // const handleSubmit = () => {
  //   const regex =
  //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //   if (regex.test(emailAddress) === true) {
  //     mutate(
  //       { email: emailAddress },
  //       {
  //         onSuccess: handleSuccess,
  //         onError: onErrorResponse,
  //       }
  //     );
  //   } else {
  //     toast.error(t("Please insert a valid email."), {
  //       id: "subscribed-email-error",
  //     });
  //   }
  // };
  return (
    // <form action="https://formsubmit.co/1636a9a005108a719b7d0dcb53cd113d" method="POST">
    //   <input type="hidden" name="_subject" value="New Contact Form Submission" />
    //   <input type="hidden" name="_templete" value="table" />
    //   <input type="hidden" name="_form" value="Custom-email@example.com" />
    <Grid container spacing={2} alignItems="center" marginTop="-50px" >
      <Grid item>
        <TextField
        //  value={companyName}
        //  onChange={(e) => setCompanyName(e.target.value)}
          sx={{
            color: "black",
            height: "48px",
            fontFamily: "Montserrat",
         
            input: {
                background: "white",
                borderRadius:'10px'
            }
          }}
          
          type="text"
          name="Company Name"
          placeholder="Company Name"
        />
      </Grid>
      <Grid item>
        <TextField
        // value={phoneNumber}
        // onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{
            color: "black",
            height: "48px", 
            fontFamily: "Montserrat",
            
            input: {
                background: "white",
                borderRadius:'10px'
            }
          }}
          type="phone number"
          name="Whatsapp Number"
          placeholder="Whatsapp Number"
         
        />
      </Grid>
      <Grid item>
      <Button
        href="{`mailto:${email}`}"
          variant="contained"
          type="submit"
          sx={{
            height: "48px",
            px: "50px",
            fontFamily: "Montserrat",
          }}
          // onClick={handleTryItFree}
          // startIcon={<MailOutlineIcon />}
        >
          {children} Try it free
        </Button>
      </Grid>
    </Grid>
    // </form>
  );
};

export default InfoInput;
