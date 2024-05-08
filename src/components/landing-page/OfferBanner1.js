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

const OfferBanner1 = ({ landingPageData, isSmall }) => {
  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: true,
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
                  `0.828571px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                position: "relative",
                height: `${height}px`, // Set the height dynamically
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
                objectFit="contain"
                borderRadius="5px"
              />
            </Box>
          ))}
        </Slider>
      </SliderCustom>
    );
  };

  const banners = landingPageData?.promotion_banners
  const banners1 = landingPageData?.promotion_banners?.filter(item => item.category === 'Category 1');
  const banners2 = landingPageData?.promotion_banners?.filter(item => item.category === 'Category 2');
  const banners3 = landingPageData?.promotion_banners?.filter(item => item.category === 'Category 3');
  const banners4 = landingPageData?.promotion_banners?.filter(item => item.category === 'Category 4');

  const category1Banners = banners.filter(item => item.category === 'Category 1');
  const category2Banners = banners.filter(item => item.category === 'Category 2');
  const category3Banners = banners.filter(item => item.category === 'Category 3');
  const category4Banners = banners.filter(item => item.category === 'Category 4');


  return (
    <CustomContainer>
          <CustomBoxFullWidth sx={{ marginY: isSmall ? "22px" : "10px" }}>
              <Grid container spacing={2}>
                  {/* Render slider with height 470px */}
                  <Grid item xs={12} sm={6} md={6}>
                      {renderSlider(banners1, 470)}
                  </Grid>
                  {/* Render slider with height 220px */}
                  <Grid item xs={12} sm={6} md={6}>
                      {renderSlider(banners2, 220)}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>

                  </Grid>
                  <Grid item xs={6} sm={3} md={3} sx={{ marginTop: "-240px" }}>
                      {renderSlider(banners3, 200)}
                  </Grid>
                  <Grid item xs={6} sm={3} md={3} sx={{ marginTop: "-240px" }}>
                      {renderSlider(banners4, 200)}
                  </Grid>
              </Grid>
          </CustomBoxFullWidth>
    </CustomContainer>
  );
};

export default OfferBanner1;
