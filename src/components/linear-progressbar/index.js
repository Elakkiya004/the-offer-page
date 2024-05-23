import React from "react";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';


const TRACKING_ID = "G-FECBMFT6KW";


const BorderLinearProgress = styled(LinearProgress)(({ theme, height }) => ({
  height: height ? height : 8,
  borderRadius: 5,
}));
const CustomLinearProgressbar = ({value,height}) => {

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

  return <BorderLinearProgress variant="determinate" value={value} height={height}/>;
};

CustomLinearProgressbar.propTypes = {};

export default CustomLinearProgressbar;
