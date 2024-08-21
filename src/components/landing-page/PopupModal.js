import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { Grid, Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { CustomBoxFullWidth, SliderCustom } from "../../styled-components/CustomStyles.style";
import CustomImageContainer from "../CustomImageContainer";
import CustomContainer from "../container";
import { X } from 'lucide-react';

const BlurredBackdropExample = ({ landingPageData, onClose }) => {
  const modalRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Adjust the delay timing as needed

    return () => clearTimeout(timeout); // Cleanup function
  }, []);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const banners1 = landingPageData?.promotion_banners?.filter(item => item.category === 'Category 8');

  return (
    <CustomContainer>
      {isVisible && (
        <Box
          ref={modalRef}
          onClick={closeModal}
          sx={{
            display: "flex",
            position: "fixed",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            top: 0,
            left: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 0.5s ease-in-out',
            opacity: 1,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: isSmall ? "90vw" : "800px", // Responsive width
              maxHeight: "90vh", // Constrain height on mobile
              overflowY: "auto", // Allow scrolling if content overflows
              padding: isSmall ? "20px" : "0", // Add padding for mobile view
            }}
          >
            <SliderCustom>
              <Slider {...settings}>
                {banners1.map((item, index) => (
                  <Box key={index}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <CustomImageContainer
                        src={`${landingPageData?.base_urls?.promotional_banner_url}/${item.img}`}
                        alt="banners"
                        width="100%" // Set to 100% to fill the box
                        objectFit="contain"
                        borderRadius="5px"
                        style={{ height: isSmall ? "30vh" : "500px" }}
                      />
                    </a>
                  </Box>
                ))}
              </Slider>
            </SliderCustom>
            <Button
              color="primary"
              onClick={onClose}
              sx={{
                position: "absolute",
                top: isSmall ? "20px" : "10px",
                right: isSmall ? "10px" : "10px",
                color: "white",
              }}
            >
              <X />
            </Button>
          </Box>
        </Box>
      )}

      <CustomBoxFullWidth sx={{ marginY: isSmall ? "22px" : "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            {/* You can still render the sliders here if needed */}
          </Grid>
        </Grid>
      </CustomBoxFullWidth>
    </CustomContainer>
  );
};

export default BlurredBackdropExample;
