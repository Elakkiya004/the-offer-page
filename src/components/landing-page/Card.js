import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import CustomContainer from "../container";
import { color, fontFamily } from '@mui/system';
import { MarginTwoTone } from '@mui/icons-material';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

const CustomCard = () => {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const imageUrls = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VZGQ8G2af8WHQv8pJ5GN3Ta9IqigHU9jsfHcwt4mZ8vimJRX",
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRt1P7D0cNmBfxJizZa-JuQNtDi5JJkzUGUxfvrXckndy6eeQ8b",
        "https://cdn-icons-png.flaticon.com/512/6150/6150436.png",
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcST-9rGUYHk1SmKjETV3AZx-tk-_EXjC3RIqG-lBiKIugLSRqEd"
    ];

    const cardContents = [
        { name: "Setup Location", occupation: "Choose your location to discover top local deals and offers" },
        { name: "Sign up & explore", occupation: "Sign-in log in using your WhatsApp number or Email" },
        { name: "Deals & Discounts", occupation: "Add your customized discounted item to your cart" },
        { name: "Save your time", occupation: "Show QR code at the store & enjoy the discount on your purchase" }
    ];

    return (
        <CustomContainer style={{ fontFamily: "sans-serif" }}>
             <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          fontSize: { xs: '12px', sm: '25px' },
          fontWeight: {xs: "400", sm: "700"},
          color: "red"
        }}
      >
        How to Enjoy the Best Offers in your area
      </Typography><br />
            <Grid container spacing={2}>
                {imageUrls.map((imageUrl, index) => (
                    <Grid item xs={6} sm={6} md={3} key={index} sx={{ marginTop: "-20px", fontFamily: "Montserrat" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '' }}>
                            <img
                                src={imageUrl}
                                alt={`Image ${index + 1}`}
                                style={{ height: isMobile ? '30px' : '50px' }}
                            />
                        </div>

                        <CardContent style={{marginTop: "-30px"}}>
                            <Typography variant="h5" component="div" style={{ textAlign: "center", fontWeight: isMobile ? "400" : "700" ,fontSize: isMobile ? "10px" : "16px", fontFamily: "Montserrat" }}>
                                {cardContents[index].name}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" style={{ textAlign: "center", fontSize: isMobile ? "8px" : "14px", fontFamily: "Montserrat" }}>
                                {cardContents[index].occupation}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </CustomContainer>
    );
}

export default CustomCard;
