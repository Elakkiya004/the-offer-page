import React from "react";
import Slider from "react-slick";
import { Grid, alpha } from "@mui/material";
import { Box } from "@mui/system";
import {
  CustomBoxFullWidth,
  SliderCustom,
} from "../../styled-components/CustomStyles.style";
import CustomImageContainer from "../CustomImageContainer";
import CustomContainer from "../container";

const OfferBanner = ({ landingPageData, isSmall }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const renderSlider = (banners, height) => {
    return (
      <SliderCustom>
        <Slider {...settings}>
          {banners.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: (theme) =>
                  `0.828571px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                position: "relative",
                height: `${height}px`,
                width: "100%",
                borderRadius: "5px",
                overflow: "hidden",
                "&:hover": {
                  img: {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              <CustomImageContainer
                src={`${landingPageData?.base_urls?.promotional_banner_url}/${item.img}`}
                alt="banners"
                height="100%"
                width="100%"
                obejctfit="contain"
                borderRadius="5px"
              />
            </Box>
          ))}
        </Slider>
      </SliderCustom>
    );
  };

  const banners = landingPageData?.promotion_banners;
  const category5Banners = banners.filter(item => item.category === 'Category 5');

  return (
    <CustomContainer>
      <CustomBoxFullWidth sx={{ marginY: isSmall ? "22px" : "-40px" }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              {renderSlider(category5Banners, 200)}
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              {renderSlider(category5Banners, 200)}
            </Grid>
        </Grid>
      </CustomBoxFullWidth>
    </CustomContainer>
  );
};

export default OfferBanner;
