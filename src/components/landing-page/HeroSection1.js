import React from "react";
import Slider from "react-slick";
import { Grid, alpha, NoSsr, useMediaQuery, theme } from "@mui/material";
import { Box } from "@mui/system";
import {
    CustomBoxFullWidth,
    SliderCustom,
    CustomStackFullWidth
} from "../../styled-components/CustomStyles.style";
import CustomImageContainer from "../CustomImageContainer";
import CustomContainer from "../container";
import HeroSection from "./hero-section/HeroSection";
import HeroLocationForm from "./hero-section/HeroLocationForm";
import HeroTitleSection from "./hero-section/HeroTitleSection";

const HeroSection1 = ({ landingPageData, isSmall, configData, handleOrderNow }) => {
    const settings = {
        dots: false,
        infinite: true,
        pauseOnHover: true,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 3000
    };

    // Function to render each slider
    const renderSlider = (banners, height) => {
        return (
            <SliderCustom>
                <Slider {...settings}>
                    {banners.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: (theme) =>
                                    `0.828571px solid ${alpha('#808080', 0.15)}`,
                                position: "relative",
                                height: `${height}px`, // Set the height dynamically
                                width: "100%",
                                borderRadius: "5px",
                                overflow: "hidden",
                                marginTop:{ xs: "50px", sm: "89px" },
                                
                            }}
                        >
                            <CustomImageContainer
                                src={`${landingPageData?.base_urls?.promotional_banner_url}/${item.img}`}
                                alt="banners"
                                height={{
                                    xs: "250px",
                                    sm: "540px"
                                }}
                                width="100%"
                                objectFit="contain"
                                borderRadius="5px"
                                marginTop="100px"
                            />
					
                        </Box>
                    ))}
                </Slider>
            </SliderCustom>
        );
    };

    const banners = landingPageData?.promotion_banners
    const banners0 = landingPageData?.promotion_banners?.filter(item => item.category === 'Category 0');

    const category0Banners = banners.filter(item => item.category === 'Category 0');


    return (
        <CustomContainer>
            <CustomBoxFullWidth sx={{ marginY: isSmall ? "22px" : "10px" }}>
                <Grid container spacing={2}>
                    {/* Render slider with height 470px */}
                    <Grid item xs={12} sm={12} md={12}>
                        {renderSlider(banners0, {xs: "100px", sm: "100px"})}
                    </Grid>
                </Grid>
            </CustomBoxFullWidth>
        </CustomContainer>
    );
};

export default HeroSection1;
