import React, {useEffect} from "react";
import {Container} from "@mui/material";
import {styled} from "@mui/material/styles";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const ContainerWrapper = styled(Container)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        // Add your styles for the 'lg' breakpoint here
        maxWidth: '1400px', // Example value, you can replace it with your desired maxWidth
    },
}));
const CustomContainer = (props) => {

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

    const {children} = props;
    return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default CustomContainer;
