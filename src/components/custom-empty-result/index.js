import React from "react";
import PropTypes from "prop-types";
import {
  CustomStackFullWidth,
  CustomTypographyGray,
} from "../../styled-components/CustomStyles.style";
import CustomImageContainer from "../CustomImageContainer";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/system";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

const CustomEmptyResult = (props) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { image, label, width, height } = props;
  const { t } = useTranslation();
  return (
    <CustomStackFullWidth
      alignItems="center"
      justifyContent="center"
      sx={{ height: "40vh" }}
      spacing={1}
    >
      <CustomImageContainer
        src={image?.src}
        alt={label}
        height={height ? height : 300}
        width={width ? width : 300}
      />
      <Stack alignItems="center" justifyContent="center">
        <CustomTypographyGray>
          {label ? t(label) : t("Not found")}
        </CustomTypographyGray>
      </Stack>
    </CustomStackFullWidth>
  );
};

CustomEmptyResult.propTypes = {};

export default CustomEmptyResult;
