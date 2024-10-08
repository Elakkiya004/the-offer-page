import {
    Grid,
    Typography,
    styled,
    useMediaQuery,
    useTheme,
    TextField,
    Button
  } from "@mui/material";
  import { Box, Stack } from "@mui/system";
  import { useRouter } from "next/router";
  import React, { useEffect } from "react";
  import { useTranslation } from "react-i18next";
  import { CustomButtonPrimary } from "../../styled-components/CustomButtons.style";
  import {
    CustomBoxFullWidth,
    CustomStackFullWidth,
  } from "../../styled-components/CustomStyles.style";
  import { IsSmallScreen } from "../../utils/CommonValues";

  import CustomContainer from "../container";
  import ReactGA from "react-ga4";
  import TagManager from 'react-gtm-module';

  const TRACKING_ID = "G-FECBMFT6KW";

  const NewsLetter = ({ data, isSmall, email, children }) => {


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

    return (
      <CustomContainer>
        <CustomStackFullWidth
          py={{ xs: "1.125rem", md: "3.125rem" }}
          spacing={IsSmallScreen() ? 2.5 : 5}
          height="100%"
        >
    <Typography textAlign="center" variant={isSmall ? "h7" : "h4"} sx={{ marginTop: {xs: "-100px", sm: "-70px"} }} >
    Shop SMART! Save BIG! Support LOCAL!
      </Typography>
      <Typography textAlign="center" variant={isSmall ? "h7" : "h6"} style={{marginTop: {xs: "-40px", sm: "-100px"} }} >
      Join our newsletter today and receive 20% off for a friend and 200 for yourself!
      </Typography>
      <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center" // Center items horizontally
            // Ensure the form is vertically centered
        >
            <Grid item xs={12} sm={6} md={4}> {/* Responsive width for the input field */}
                <TextField
                    sx={{
                        color: 'black',
                        height: '48px',
                        width: '100%', // Full width on small screens, 50% width on medium screens
                        maxWidth: '100%', // Maximum width on larger screens
                        input: {
                            background: 'white',
                            borderRadius: '10px',
                        },
                        marginTop: {xs: "-20px", sm: "-40px"} 
                    }}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                />
            </Grid>
            <Grid item>
                <Button variant="contained" href="{`mailto:${email}`}" sx={{ height: '48px', px: '50px',  marginTop: {xs: "", sm: "-55px"} }}>
                {children} Sign up
                </Button>
            </Grid>
        </Grid>
        </CustomStackFullWidth>
      </CustomContainer>
    );
  };
  

  
  export default NewsLetter;
  