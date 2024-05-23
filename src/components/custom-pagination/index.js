import React from "react";
import { Box } from "@mui/system";
import { Pagination } from "@mui/lab";
import PropTypes from "prop-types";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const CustomPagination = (props) => {

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

  const { total_size, page_limit, offset, setOffset } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "auto",
      }}
      padding={{ xs: "10px 0px 0px 0px", md: "30px 0px 70px 0px" }}
    >
      <Pagination
        count={Math.ceil(total_size / page_limit)}
        onChange={(e, value) => {
          setOffset(value);
        }}
        page={offset}
      />
    </Box>
  );
};

CustomPagination.propTypes = {
  total_size: PropTypes.number.isRequired,
  page_limit: PropTypes.number.isRequired,
  offset: PropTypes.string.isRequired,
  setOffset: PropTypes.func.isRequired,
};

export default CustomPagination;
