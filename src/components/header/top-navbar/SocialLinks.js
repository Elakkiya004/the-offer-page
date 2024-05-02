import { useTheme } from "@emotion/react";
import { IconButton, Typography,Stack } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
import { Facebook, Instragram, LinkedIn, Pinterest, Twitter } from "../../footer/footer-middle/Icon";
import CustomContainer from "../../container";
// import { Stack } from "@mui/material";

const SocialLinks = (props) => {
	const { configData, landingPageData } = props;
	const { t } = useTranslation();
	const clickHandler = (link) => {
		window.open(link);
	};
	const theme = useTheme();
	const iconHandler = (name) => {
		switch (name) {
			case "facebook":
				return <Facebook />;
			case "instagram":
				return <Instragram />;
			case "twitter":
				return <Twitter />;
			case "linkedin":
				return <LinkedIn />;
			case "pinterest":
				return <Pinterest />;
			default:
				return <Twitter />;
		}
	};
	return (
		// <CustomStackFullWidth spacing={2}>
        <Stack  sx={{ paddingTop: "20px" }} >
           	<Typography sx={{ fontSize: "16px", }}>
				{landingPageData?.fixed_footer_description}
			</Typography>
			<CustomStackFullWidth
				direction="row"
				spacing={3}
				alignItems="center"
				justifyContent={{ xs: "center", sm: "flex-start" }}
				flexWrap="wrap"
				pb={2}
			>
				{configData &&
					configData?.social_media?.length > 0 &&
					configData?.social_media?.map((item, index) => {
						const { name, link } = item;
						return (
							<IconButton
								sx={{
									padding: "0px",
									color: theme.palette.primary.icon,
									transition: "all ease 0.5s",
									"&:hover": {
										transform: "scale(1.14)",
										color: theme.palette.primary.main,
									},
								}}
								key={index}
								onClick={() => clickHandler(link)}
							>
								{iconHandler(name)}
							</IconButton>
						);
					})}
			</CustomStackFullWidth> 
        </Stack>
		
		// </CustomStackFullWidth>
	);
};

SocialLinks.propTypes = {};

export default SocialLinks;
