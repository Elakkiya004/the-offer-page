import React, {useEffect} from "react";

import Typography from "@mui/material/Typography";
import { CustomBoxImageText } from "../file-previewer/FilePreviewer.style";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const FileFormatInfo = (props) => {

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
