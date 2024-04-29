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

  const splitBannersIntoTwo = () => {
    const banners = landingPageData?.promotion_banners;
    const middleIndex = Math.ceil(banners.length / 2);
    const firstSliderBanners = banners.slice(0, middleIndex);
    const secondSliderBanners = banners.slice(middleIndex);
    return [firstSliderBanners, secondSliderBanners];
  };

  const renderSlider = (banners) => {
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
                height: "175px",
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

  return (
    <CustomContainer>
      <CustomBoxFullWidth sx={{ marginY: isSmall ? "22px" : "40px" }}>
        <Grid container spacing={2}>
          {splitBannersIntoTwo().map((banners, index) => (
            <Grid key={index} item xs={12} sm={6} md={6}>
              {renderSlider(banners)}
            </Grid>
          ))}
        </Grid>
      </CustomBoxFullWidth>
    </CustomContainer>
  );
};

export default OfferBanner;
