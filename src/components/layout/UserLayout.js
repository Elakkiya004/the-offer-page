import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import MenuBar from "../profile/MenuBar";
import SideDrawer from "../profile/SideDrawer";
import { styled } from "@mui/material/styles";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CustomBodyContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing.unit * 3,
}));
const UserLayout = (props) => {

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

  const { component, configData, t } = props;
  const router = useRouter();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        md={12}
        spacing={{ xs: 0, md: 3, lg: 2 }}
        sx={{ minHeight: "100vh" }}
      >
        <Grid
          container
          item
          mt="1rem"
          sx={{ display: { sm: "block", md: "none" } }}
          alignItems="center"
        >
          <SideDrawer t={t} />
        </Grid>
        <Grid
          item
          //sm={3}
          lg={2.5}
          md={3}
          xs={12}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <MenuBar configData={configData} t={t} />
        </Grid>

        {/* <Grid item md={9} lg={9.5} xs={12}>
          <CustomBodyContent>{component}</CustomBodyContent>
        </Grid> */}
      </Grid>
    </>
  );
};

UserLayout.propTypes = {};

export default UserLayout;
