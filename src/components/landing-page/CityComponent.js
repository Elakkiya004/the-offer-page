import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import CustomContainer from "../container";
import { useTranslation } from "react-i18next";

// Sample JSON data
const data = {
  "cities": [
    {
      "name": "Chennai",
      "areas": [
        "Chennai North",
        "Chennai South",
        "Chennai Central"
      ]
    },
    {
      "name": "Tirunelveli",
      "areas": [
        "Tirunelveli East",
        "Tirunelveli West",
        "Tirunelveli South"
      ]
    },
    {
      "name": "Salem",
      "areas": [
        "Salem North",
        "Salem South",
        "Salem East",
        "Salem West"
      ]
    }
  ]
};

const ComponentThreeContainer = styled(Box)(({ theme, paddingTop, paddingBottom, background }) => ({
  marginTop: ".6rem",
  paddingTop: paddingTop ? paddingTop : "1.5rem",
  paddingBottom: paddingBottom ? paddingBottom : "1rem",
}));

const CityComponent = ({ cityName = 'Salem' }) => {
  // Find the city object based on the cityName prop
  const city = data.cities.find((c) => c.name === cityName);

  if (!city) {
    return <div>City not found</div>;
  }

  const areas = city.areas.slice(0, 9); // Limit to 9 areas for the 3x3 grid

  return (
    <ComponentThreeContainer paddingTop="2rem" paddingBottom="2rem">
      <CustomContainer>
        <Grid container spacing={2}>
          {areas.map((area, index) => (
            <Grid item key={index} xs={4} sm={4} md={4} align="center">
              <Typography variant="body1">{area}</Typography>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </ComponentThreeContainer>
  );
};

export default CityComponent;
