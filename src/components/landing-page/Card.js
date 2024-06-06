import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import CustomContainer from "../container";
import { color, fontFamily } from '@mui/system';

const CustomCard = () => {
    const imageUrls = [
        "https://img.freepik.com/premium-psd/3d-realistic-store-icon-sign_553473-277.jpg?w=996",
        "https://initialaudio.com/wp-content/uploads/2023/09/Voucher-e1693535714796.png",
        "https://cdn.vectorstock.com/i/1000x1000/29/71/3d-falling-gold-coins-and-leather-wallet-vector-46052971.webp",
        "https://initialaudio.com/wp-content/uploads/2023/09/Voucher-e1693535714796.png"
    ];

    const cardContents = [
        { name: "Setup Location", occupation: "Sign-in log in using your WhatsApp number or Email" },
        { name: "Sign up & explore", occupation: "Choose your location to discover top local deals and offers" },
        { name: "Deals & Discounts", occupation: "Add your customized discounted item to your cart" },
        { name: "Save your time", occupation: "Show your unique QR code at the store & enjoy the discount on your purchase." }
    ];

    return (
        <CustomContainer style={{color: "Montserrat", fontFamily: "sans-serif"}}>
            <h1 style={{textAlign: "center"}}>How to Enjoy the Best Offers in your area</h1><br />
            <Grid container spacing={2}>
                {imageUrls.map((imageUrl, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                            <CardMedia
                                component="img"
                                height="100"
                                image={imageUrl}
                                alt={`Image ${index + 1}`}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" style={{textAlign: "center", fontSize: "20px"}}>
                                    {cardContents[index].name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary" style={{textAlign: "center", fontSize: "15px"}}>
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
