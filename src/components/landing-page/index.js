import React, { useEffect, useState } from "react";
import ComponentOne from "./ComponentOne";
import Registration from "./Registration";
import ComponentTwo from "./ComponentTwo";
import OfferBanner from "./OfferBanner";
import OfferBanner1 from "./OfferBanner1";
import HeroSection from "./hero-section/HeroSection";
import dynamic from "next/dynamic";
import PushNotificationLayout from "../PushNotificationLayout";
import AppDownloadSection from "./app-download-section/index";
import { useGeolocated } from "react-geolocated";
import { useRouter } from "next/router";
import MapModal from "../Map/MapModal";
import Banners from "./Banners";
import {
  NoSsr, useTheme, alpha,
  Box,
  Grid,
  styled,
  useMediaQuery,
} from "@mui/material";
import DiscountBanner from "./DiscountBanner";
import CookiesConsent from "../CookiesConsent";
import useGetGuest from "../../api-manage/hooks/react-query/guest/useGetGuest";
import CustomContainer from "../container";
import CardCategories from "../home/category-card";

import {
  CustomBoxFullWidth,
} from "../../styled-components/CustomStyles.style";
import ComponentThree from "./ComponentThree";
import Stores from "../home/stores";
import SpecialFoodOffers from "../home/special-food-offers";
import VisitAgain from "../home/visit-again";
import PopularStore from "./PopularStore";
import CityComponent from "./CityComponent";
import HeroSection1 from "./HeroSection1";
import Card from "./Card";


const LandingPage = ({ configData, landingPageData, hello }) => {
  console.log(hello)
  const Testimonials = dynamic(() => import("./Testimonials"), {
    ssr: false,
  });
  const [location, setLocation] = useState(undefined);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    isGeolocationEnabled: true,
  });
  useEffect(() => {
    setLocation(JSON.stringify(localStorage.getItem("location")));
  }, []);
  const handleClose = () => {
    const location = localStorage.getItem("location");
    const isModuleExist = localStorage.getItem("module");
    if (location) {
      isModuleExist && setOpen(false);
    } else {
      setOpen(false);
    }
  };
  const router = useRouter();
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
  let token = undefined;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const { data: guestData, refetch: guestRefetch, isLoading } = useGetGuest();
  useEffect(() => {
    if (!token) {
      guestRefetch();
    }
  }, []);
  localStorage.setItem("guest_id", guestData?.guest_id);

  return (
    <>
      <PushNotificationLayout>
        <Grid container spacing={1}>
          {/* <HeroSection
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          /> */}
          <HeroSection1
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          />

          <OfferBanner1
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          />
          <Grid item xs={12} md={12} sx={{ marginTop: { xs: "-10px", sm: "-80px" } }}>
            <CustomContainer>
              <CardCategories configData={configData} />
            </CustomContainer>
          </Grid>
        </Grid>
        <Card/>

        {/* two banners */}
        <OfferBanner
          configDate={configData}
          landingPageData={landingPageData}
        />
        <CustomContainer>
          <VisitAgain configData={configData} />

        </CustomContainer>

        {/* three banners */}
        {landingPageData?.promotion_banners?.length > 0 && (
          <Banners landingPageData={landingPageData} isSmall={isSmall} />
        )}
        {/* <ComponentOne
          landingPageData={landingPageData}
          configData={configData}
          handleOrderNow={handleOrderNow}
        /> */}
        <Grid item xs={12} md={12} sx={{ marginTop: "-50px" }}>
        <ComponentThree
          configData={configData}
          landingPageData={landingPageData}
        />
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginTop: "-15px" }}>
        <h1 style={{marginLeft: "85px"}}>New Arrivals</h1>
        {landingPageData?.fixed_promotional_banner && (
          <CustomBoxFullWidth>
            <DiscountBanner
              bannerImage={`${landingPageData?.base_urls?.promotional_banner_url}/${landingPageData?.fixed_promotional_banner}`}
              isSmall={isSmall}
            />
          </CustomBoxFullWidth>
        )}
        </Grid>
        {(landingPageData?.earning_title ||
          landingPageData?.earning_sub_title ||
          landingPageData?.earning_seller_title ||
          landingPageData?.earning_seller_sub_title ||
          landingPageData?.earning_dm_title ||
          landingPageData?.earning_dm_sub_title) && (
            <Registration data={landingPageData} isSmall={isSmall} />
          )}

       <PopularStore/>

        <Grid item xs={12} sx={{ marginTop: "20px" }}>
          <CustomContainer>
            <SpecialFoodOffers />
          </CustomContainer>
        </Grid>

        <ComponentTwo
          configData={configData}
          landingPageData={landingPageData}
        />
        <CustomContainer>

          <Stores />
        </CustomContainer>
        {/* {(landingPageData?.business_title ||
          landingPageData?.business_sub_title ||
          landingPageData?.business_image) && (
          <AppDownloadSection
            configData={configData}
            landingPageData={landingPageData}
          />
        )} */}
        {/* {landingPageData?.testimonial_list?.length > 0 && (
          <Testimonials landingPageData={landingPageData} isSmall={isSmall} />
        )} */}
        <CityComponent/>
        {open && (
          <MapModal
            open={open}
            handleClose={handleClose}
            coords={coords}
            disableAutoFocus
          />
        )}
        <NoSsr>
          <CookiesConsent text={configData?.cookies_text} />
        </NoSsr>
      </PushNotificationLayout>
    </>
  );
};

export default LandingPage;