import {
	alpha,
	Box,
	Grid,
	styled,
	useMediaQuery,
	useTheme,
	Typography,
	InputBase
} from "@mui/material";
import React from "react";
import CustomContainer from "../container";
import { useTranslation } from "react-i18next";
import InfoInput from "./input-component/InfoInput";

export const ComponentThreeContainer = styled(Box)(
	({ theme, paddingTop, paddingBottom, background }) => ({
		marginTop: ".6rem",
		paddingTop: paddingTop ? paddingTop : "1.5rem",
		paddingBottom: paddingBottom ? paddingBottom : "1rem",
		// background: alpha(theme.palette.primary.main, 0.3),
		background: 'white',
		color: "Montserrat",
		fontFamily: "sans-serif" 
	})
);

const ComponentThree = ({ configData, landingPageData }) => {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const { t } = useTranslation();

	return (
		<>
			{/* {(Number.parseInt(
				landingPageData?.download_user_app_links?.playstore_url_status
			) === 1 ||
				Number.parseInt(
					landingPageData?.download_user_app_links?.apple_store_url_status
				) === 1) && ( */}
			<ComponentThreeContainer paddingTop="2rem" paddingBottom="2rem">
				<CustomContainer>
					<Grid
						container
						alignItems="center"
						justifyContent="center"
						spacing={4}
					>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							align={'left'}
						>

							<Typography variant="h3" sx={{
								// fontSize: "20px",
								fontweight: '200',
								marginTop: "-20px",
								fontFamily: "Montserrat",
								fontSize: { xs: '20px', sm: '30px' },
							}}>List Your Own Business</Typography>
							<Typography variant="body1" sx={{
								fontSize: "20px",
								display: "flex",
								flexDirection: "column",
								paddingY: '20px',
								marginTop: "-10px",
								fontFamily: "Montserrat"
							}}>Setup your free store and get unlimited businesses.</Typography>

						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							align={"left"}

						>
							<Box sx={{ ml: { md: 3 } }}>
								<InfoInput />
							</Box>
						</Grid>
					</Grid>
				</CustomContainer>
			</ComponentThreeContainer>
			{/* )} */}
		</>
	);
};

export default ComponentThree;
