import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";
import toast from "react-hot-toast";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const CustomCopyWithTooltip = (props) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);


  const { t, value } = props;
  const [copy, setCopy] = useState(false);
  const handleCopy = (coupon_code) => {
    navigator.clipboard
      .writeText(coupon_code)
      .then(() => {
        setCopy(true);
        toast(() => (
          <span>
            {t("Code")}
            <b style={{ marginLeft: "4px", marginRight: "4px" }}>
              {coupon_code}
            </b>
            {t("has been copied")}
          </span>
        ));
      })
      .catch((error) => {
        console.error("Failed to copy code:", error);
      });
  };
  return (
    <Tooltip placement="top" title={copy ? t("Copied") : t("Copy")}>
      <IconButton
        onMouseEnter={() => copy && setCopy(false)}
        onClick={() => handleCopy(value)}
        sx={{ p: { xs: "0px", sm: "5px" }, m: { xs: "0px", sm: "5px" } }}
      >
        <ContentCopyIcon color="primary.main" style={{ fontSize: 20 }} />
      </IconButton>
    </Tooltip>
  );
};

CustomCopyWithTooltip.propTypes = {
  t: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default CustomCopyWithTooltip;
