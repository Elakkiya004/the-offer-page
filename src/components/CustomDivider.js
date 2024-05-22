import React from "react";
import Link from "next/link";
import { alpha, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CustomBoxFullWidth } from "../styled-components/CustomStyles.style";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const CustomDivider = ({
  phone,
  children,
  paddingTop,
  width,
  marginLeft,
  border,
}) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const theme = useTheme();
  return (
    <CustomBoxFullWidth
      sx={{
        borderBottom: `${border} solid ${alpha(
          theme.palette.neutral[400],
          0.2
        )}`,
        paddingTop: paddingTop,
        width: width,
        marginLeft: marginLeft,
      }}
    ></CustomBoxFullWidth>
  );
};
export default CustomDivider;
