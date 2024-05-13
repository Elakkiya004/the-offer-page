import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography, Grid } from '@mui/material';
import CustomContainer from "../container";



const CustomCard = () => {
    return (
        <CustomContainer>
        <Grid container spacing={2}>
            {[1, 2, 3, 4].map((index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={`https://img.freepik.com/premium-psd/3d-realistic-store-icon-sign_553473-277.jpg?w=996`}
                            alt={`https://img.freepik.com/premium-psd/3d-realistic-store-icon-sign_553473-277.jpg?w=996 ${index}`}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                John Doe
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Architect & Engineer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </CustomContainer>
    );
}

export default CustomCard;


