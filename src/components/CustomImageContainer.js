import React, { useEffect, useState } from "react";
import { CustomImageContainerStyled } from "../styled-components/CustomStyles.style";
import placeholder from "../../public/static/no-image-found.png";
import { Box } from "@mui/system";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const CustomImageContainer = ({
  cursor,
  mdHeight,
  maxWidth,
  height,
  width,
  objectfit,
  minwidth,
  src,
  alt,
  borderRadius,
  marginBottom,
  smHeight,
  smMb,
  smMaxWidth,
  smWidth,
  aspectRatio,
  padding
}) => {

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

  const [imageFile, setState] = useState(null);
  useEffect(() => {
    setState(src);
  }, [src]);

  return (
    <CustomImageContainerStyled
      height={height}
      width={width}
      objectfit={objectfit}
      minwidth={minwidth}
      border_radius={borderRadius}
      margin_bottom={marginBottom}
      smheight={smHeight}
      sm_mb={smMb}
      max_width={maxWidth}
      sm_max_width={smMaxWidth}
      sm_width={smWidth}
      md_height={mdHeight}
      cursor={cursor}
      aspect_ratio={aspectRatio}
      padding={padding}
    >
      {!imageFile ? (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            border: (theme) => `1px solid ${theme.palette.neutral[200]}`,
          }}
        />
      ) : (
        <img
          src={imageFile}
          alt={alt}
          onError={() => {
            // currentTarget.onerror = null; // prevents looping
            setState(placeholder.src);
          }}
          loading="lazy"
        />
      )}
    </CustomImageContainerStyled>
  );
};
export default CustomImageContainer;
