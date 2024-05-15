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
        "Adambakkam",
        "Adyar",
        "Alandur",
        "Alapakkam",
        "Alwarpet",
        "Alwarthirunagar",
        "Ambattur",
        "Aminjikarai",
        "Anna Nagar",
        "Annanur",
        "Arumbakkam",
        "Ashok Nagar",
        "Avadi",
        "Ayanavaram",
        "Beemannapettai",
        "Besant Nagar"
      ]
    },
    {
      "name": "Tirunelveli",
      "areas": [
        "Ambasamudram",
        "Cheranmadevi",
        "Eruvadi",
        "Gangaikondan",
        "Idaiyangudi",
        "Kadayanallur",
        "Manimutharu",
        "Melacheval",
        "Nallankulam",
        "Nanguneri",
        "Palayamkottai",
        "Pattamadai",
        "Sankaranayinarkoil",
        "Thirukkurungudi",
        "Uvari",
        "Vadakkankulam"
      ]
    },
    {
      "name": "Salem",
      "areas": [
        "Arasiramani",
        "Attayampatti",
        "Belur",
        "Dalavaipatti",
        "Edaganasalai",
        "Gangavalli",
        "Jalakandapuram",
        "Kadayampatti",
        "Masinaickenpatti",
        "Nangavalli",
        "Omalur",
        "P. N. Patti",
        "Poolampatti",
        "Sangagiri",
        "Thammampatti",
        "Yercaud"
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

  const areas = city.areas.slice(0); // Limit to 9 areas for the 3x3 grid

  return (
    <ComponentThreeContainer paddingTop="2rem" paddingBottom="2rem">
      <CustomContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="h4">{cityName}</Typography><hr />
          </Grid>
          {areas.map((area, index) => (

            <Grid item key={index} xs={4} sm={3} md={3} align="center">
              <Typography variant="body1">{area}</Typography>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </ComponentThreeContainer>
  );
};

export default CityComponent;
