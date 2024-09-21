import React, { useEffect, useState } from "react";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useWishListGet } from "../../api-manage/hooks/react-query/wish-list/useWishListGet";
import { setWishList } from "../../redux/slices/wishList";
import PushNotificationLayout from "../PushNotificationLayout";
import { styled, useMediaQuery, useTheme, Grid, NoSsr } from "@mui/material";
import { Box, Stack } from "@mui/system";
import TopBanner from "./top-banner";
import SearchWithTitle from "./SearchWithTitle";
import SearchResult from "./search";
import { getCurrentModuleType } from "../../helper-functions/getCurrentModuleType";
import Grocery from "./module-wise-components/Grocery";
import Pharmacy from "./module-wise-components/pharmacy/Pharmacy";
import CustomContainer from "../container";
import Shop from "./module-wise-components/ecommerce";
import { ModuleTypes } from "../../helper-functions/moduleTypes";
import FoodModule from "./module-wise-components/food";
import Parcel from "./module-wise-components/parcel/Index";
import useGetGuest from "../../api-manage/hooks/react-query/guest/useGetGuest";
import useGetAllCartList from "../../api-manage/hooks/react-query/add-cart/useGetAllCartList";
import { setCartList } from "../../redux/slices/cart";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';
import OfferBanner from "../landing-page/OfferBanner";
import HeroSection1 from "../landing-page/HeroSection1";
import Banners1 from "../landing-page/Banners1";
import Banners from "./banners";
import OfferBanner1 from "../landing-page/OfferBanner1";
import CityComponent from "../landing-page/CityComponent";
import CookiesConsent from "../CookiesConsent";
import VisitAgain from "./visit-again";
import PopularItemsNearby from "./popular-items-nearby";
import SpecialFoodOffers from "./special-food-offers";
import FeaturedStores from "./module-wise-components/pharmacy/featured-stores";
import BestReviewedItems from "./best-reviewed-items";
import NewArrivals from "./module-wise-components/ecommerce/NewArrivals";
import FeaturedCategoriesWithFilter from "./module-wise-components/ecommerce/FeaturedCategoriesWithFilter";
import Stores from "./stores";

const TRACKING_ID = "G-FECBMFT6KW";


export const HomeComponentsWrapper = styled(Stack)(({ theme }) => ({
  width: "100%",
  gap: "8px",
  marginBottom: 0, 
  paddingBottom: 0,
}));

const HomePageComponents = ({ configData, landingPageData }) => {

  const tagManagerArgs = {
		gtmId: 'G-FECBMFT6KW', // Replace 'GTM-XXXXXXX' with your GTM container ID
	  };
    if (typeof window !== 'undefined') {
      TagManager.initialize(tagManagerArgs);
    
      useEffect(() => {
        TagManager.dataLayer({
          event: 'pageview',
          path: '/'
        });
      }, []);
    }


  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const [wishListsData, setWishListsData] = useState();
  const { modules } = useSelector((state) => state.storedData);
  const matches = useMediaQuery("(max-width:1180px)");
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const { search } = router.query
  const dispatch = useDispatch();
  let zoneid = undefined;
  if (typeof window !== "undefined") {
    zoneid = localStorage.getItem("zoneid");
  }
  let token = undefined;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const onSuccessHandler = (response) => {
    setWishListsData(response);
    dispatch(setWishList(response));
  };

  const { refetch } = useWishListGet(onSuccessHandler);

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, []);
  useEffect(() => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);
  const getModule = () => {
    return JSON.parse(window.localStorage.getItem("module"));
  };

  const getModuleWiseComponents = () => {
    switch (getCurrentModuleType()) {
      case ModuleTypes.GROCERY:
        return <Grocery configData={configData} />;
      case ModuleTypes.PHARMACY:
        return <Pharmacy configData={configData} />;
      case ModuleTypes.ECOMMERCE:
        return <Shop configData={configData} />;
      case ModuleTypes.FOOD:
        return <FoodModule configData={configData} />;
      case ModuleTypes.PARCEL:
        return <Parcel configData={configData} />;
    }
  };

  const handleOrderNow = () => {
    if (location) {
      if (location === "null") {
        setOpen(true);
      } else {
        router.push("/home", undefined, { shallow: true });
      }
    } else {
      setOpen(true);
    }
  };
  const menus = ["All", "Beauty", "Bread & Juice", "Drinks", "Milks"];
  
  const { data: guestData, refetch: guestRefetch, isLoading } = useGetGuest();

  return (
    <PushNotificationLayout>
      <CustomStackFullWidth>
        <CustomStackFullWidth sx={{ position: "relative", marginTop: {xs: "60px", sm: "95px"} }}>
          {/* <TopBanner /> */}
          {/* <CustomStackFullWidth
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "absolute",
              top: 0,
              height: "100%",
            }}
          >
            <SearchWithTitle zoneid={zoneid} token={token} query={router.query.search} />
          </CustomStackFullWidth> */}
        </CustomStackFullWidth>
        <Grid item xs={12} sm={12} sx={{ marginTop: {xs: "-50px", sm: "-50px"} }}>
            <HeroSection1
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          />
          </Grid>
           <Grid item xs={12} md={12} sx={{ marginTop: { xs: "-110px", sm: "-30px" } }}>
           {router.query.search ? (
          <SearchResult
            key={router.query.id}
            searchValue={router.query.search}
            configData={configData}
          />
        ) : (
          // <Box width="100%">{getModuleWiseComponents()}</Box>
          <Box width="100%">{getModuleWiseComponents()}</Box>
        )}
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginTop: { xs: "-20px", sm: "-40px" } }}>
          <Banners1 landingPageData={landingPageData} isSmall={isSmall} />
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginTop: { xs: "-30px", sm: "-60px" } }}>
          <OfferBanner1
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          />
          </Grid>
          <Grid item xs={12} md={12} sx={{ marginTop: { xs: "-50px", sm: "-80px" } }}>
        <OfferBanner 
            configDate={configData}
            landingPageData={landingPageData}
          />
          </Grid>
          <CustomContainer>
        <Grid item xs={12} sm={12} sx={{ marginTop: isSmall ? "-30px" : "-50px" }}>
          <VisitAgain configData={configData} />
        </Grid>

        </CustomContainer>
        <Grid item xs={12}>
        <CustomContainer>
          <PopularItemsNearby
            title="Most Popular Products"
            subTitle="We provide best quality & valuable products around the world"
          />
        </CustomContainer>
      </Grid>
      <CustomContainer>
      <Banners landingPageData={landingPageData} isSmall={isSmall} />
      </CustomContainer>
      <Grid item xs={12} sx={{ marginTop: isSmall ? "" : "20px" }}>
          <CustomContainer>
            <SpecialFoodOffers />
          </CustomContainer>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: isSmall ? "" : "20px" }}>
        <CustomContainer>
          <FeaturedStores title="Popular Store" configData={configData} />
        </CustomContainer>
      </Grid>{" "}
      <Grid item xs={12}>
        <CustomContainer>
          <BestReviewedItems
            menus={menus}
            title="Best Reviewed Items"
            bannerIsLoading={isLoading}
            // url={`${data?.promotional_banner_url}/${data?.best_reviewed_section_banner}`}
          />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <NewArrivals />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <FeaturedCategoriesWithFilter title="Featured Categories" />
        </CustomContainer>
      </Grid>
      <CustomContainer>
        <Grid item xs={12} sx={{ marginTop: isSmall ? "10px" :"-30px" }}>
          <Stores />
        </Grid>
        </CustomContainer>

        {/* SEARCH ARE HAPPENING hERE
        {router.query.search ? (
          <SearchResult
            key={router.query.id}
            searchValue={router.query.search}
            configData={configData}
          />
        ) : (
          <Box width="100%">{getModuleWiseComponents()}</Box>
        )} */}
      </CustomStackFullWidth>
      <Grid sx={{ marginTop: isSmall ? "-1000px" : "-700px" }}>
        <NoSsr>
          <CookiesConsent text={configData?.cookies_text} />
        </NoSsr>
        </Grid>
    </PushNotificationLayout>
  );
};

export default React.memo(HomePageComponents);
