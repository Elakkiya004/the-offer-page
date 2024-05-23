import React, {useEffect} from "react";

import Typography from "@mui/material/Typography";
import { CustomBoxImageText } from "../file-previewer/FilePreviewer.style";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const FileFormatInfo = (props) => {

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

  const { text } = props;
  return (
    <CustomBoxImageText>
      <Typography>{text}</Typography>
    </CustomBoxImageText>
  );
};

FileFormatInfo.propTypes = {};

export default FileFormatInfo;
