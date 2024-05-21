import React from "react";
import { CircularProgress, Stack } from "@mui/material";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";

export default function Loading({ color }) {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  return (
    <Stack
      alignItems="center"
      style={{
        left: "50%",
      }}
    >
      <CircularProgress size="1rem" style={{ color: color }} />
    </Stack>
  );
}
