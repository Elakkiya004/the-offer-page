import { Grid } from "@mui/material";
import React from "react";
import ParcelOnTime from "../../../parcel/ParcelOnTime"
import ParcelFeatures from "../../../parcel/ParcelFeatures"
import ParcelVideo from "../../../parcel/ParcelVideo"
import CustomContainer from "../../../container";
import ParcelCategory from "../../../parcel/parcel-category/ParcelCategory";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";


const Parcel = ({ configData }) => {

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

	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<CustomContainer>
					<ParcelCategory />
				</CustomContainer>
				<ParcelOnTime />
				<CustomContainer>
					<ParcelFeatures />
					<ParcelVideo />
				</CustomContainer>
			</Grid>
		</Grid>
	);
};

export default Parcel;
