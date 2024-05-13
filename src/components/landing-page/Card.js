import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import CustomContainer from "../container";

const CustomCard = () => {
    const imageUrls = [
        "https://img.freepik.com/premium-psd/3d-realistic-store-icon-sign_553473-277.jpg?w=996",
        "https://initialaudio.com/wp-content/uploads/2023/09/Voucher-e1693535714796.png",
        "https://cdn.vectorstock.com/i/1000x1000/29/71/3d-falling-gold-coins-and-leather-wallet-vector-46052971.webp",
        "https://initialaudio.com/wp-content/uploads/2023/09/Voucher-e1693535714796.png"
    ];

    const cardContents = [
        { name: "Step 1", occupation: "Vist your favourite store" },
        { name: "Step 2", occupation: "Big vouchers at a discount on magicpin" },
        { name: "Step 3", occupation: "Reedem the vouchers for savings at the store" },
        { name: "Step 4", occupation: "Big vouchers at a discount on magicpin" }
    ];

    return (
        <CustomContainer>
            <h1 style={{textAlign: "center"}}>Save Big Using Magic Points</h1><br />
            <Grid container spacing={2}>
                {imageUrls.map((imageUrl, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={imageUrl}
                                alt={`Image ${index + 1}`}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" style={{textAlign: "center"}}>
                                    {cardContents[index].name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary" style={{textAlign: "center"}}>
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
