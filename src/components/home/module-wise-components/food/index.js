import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CustomContainer from "../../../container";
import FeaturedCategories from "../../featured-categories";
import Banners from "../../banners";
import { IsSmallScreen } from "../../../../utils/CommonValues";
import VisitAgain from "../../visit-again";
import SpecialFoodOffers from "../../special-food-offers";
import BestReviewedItems from "../../best-reviewed-items";
import Stores from "../../stores";
import bestFoodReviewImage from "../../assets/food_best_review.png";
import NewArrivalStores from "../../new-arrival-stores";
import DiscountedProductRedirectBanner from "../../DiscountedProductRedirectBanner";
import RunningCampaigns from "../../running-campaigns";
import FeaturedCategoriesWithFilter from "../ecommerce/FeaturedCategoriesWithFilter";
import SinglePoster from "../ecommerce/SinglePoster";
import LoveItem from "../../love-item";
import useGetOtherBanners from "../../../../api-manage/hooks/react-query/useGetOtherBanners";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

const FoodModule = (props) => {

  const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	  };
	  TagManager.initialize(tagManagerArgs);
	
	  useEffect(() => {
		TagManager.dataLayer({
			event: 'pageview',
			path: '/'
		});
	}, []);


  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const { configData } = props;
  const { data,refetch,isLoading } = useGetOtherBanners();
  useEffect(() => {
    refetch();
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sx={{ marginTop: { xs: "-10px", sm: "10px" } }}>
        <CustomContainer>
          <FeaturedCategories configData={configData} />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        {IsSmallScreen() ? (
          <VisitAgain configData={configData} />
        ) : (
          <CustomContainer>
            <VisitAgain configData={configData} />
          </CustomContainer>
        )}
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <SpecialFoodOffers title="Special Food Offers" />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <Banners />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <BestReviewedItems
            title="Best Reviewed Items"
            info={data}
          />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <LoveItem />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <NewArrivalStores />
        </CustomContainer>
      </Grid>

      {/* <Grid item xs={12}>
       <CustomContainer>
         <DiscountedProductRedirectBanner />
       </CustomContainer>
      </Grid> */}
      <Grid item xs={12}>
       <CustomContainer>
         <RunningCampaigns />
       </CustomContainer>
      </Grid>
      <Grid item xs={12}>
       <CustomContainer>
         <FeaturedCategoriesWithFilter title="Featured Categories" />
       </CustomContainer>
      </Grid>
        <Grid item xs={12}>
            <CustomContainer>
                <Stores />
            </CustomContainer>
        </Grid>
      {/* <Grid item xs={12}>
       <CustomContainer>
         <SinglePoster />
       </CustomContainer>
      </Grid> */}
    </Grid>
  );
};

FoodModule.propTypes = {};

export default FoodModule;
