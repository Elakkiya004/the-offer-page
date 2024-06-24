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
  Button,
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
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';
import PopupModal from './PopupModal';
import Banners1 from "./Banners1";
import HeroTitleSection from "./hero-section/HeroTitleSection";
import HeroLocationForm from "./hero-section/HeroLocationForm";
import { padding } from "@mui/system";

const TRACKING_ID = "G-FECBMFT6KW";

const LandingPage = ({ configData, landingPageData }) => {

  const [showModal, setShowModal] = useState(false)

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

  useEffect(() => {
    // Set showModal to true after the page has loaded
    setShowModal(true);
  }, []);


  return (
    <>
      <PushNotificationLayout >
        <Grid container spacing={1}>
          <HeroSection
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          />

          <Grid item xs={12} sm={12} sx={{ marginTop: {xs: "-60px", sm: "-78px"} }}>
            <HeroSection1
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          />
          
          </Grid>

          <Grid item xs={12} md={12} sx={{ marginTop: { xs: "-130px", sm: "-110px" } }}>
            <CustomContainer>
              <CardCategories configData={configData} />
            </CustomContainer>
          </Grid>

          <Grid item xs={12} md={12} sx={{ marginTop: {xs: "-45px", sm: "-70px"} }}>
            {landingPageData?.promotion_banners?.length > 0 && (
              <Banners1 landingPageData={landingPageData} isSmall={isSmall} />
            )}
          </Grid>

          {showModal && <PopupModal onClose={() => setShowModal(false)} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }} />} 

        <Grid item xs={12} sm={12} sx={{  marginTop: isSmall ? "-45px" : "-70px" }}>
          <OfferBanner1
            configData={configData}
            landingPageData={landingPageData}
            handleOrderNow={handleOrderNow}
          />
          </Grid>

        </Grid>
        <Grid item xs={12} sm={12} sx={{ marginTop: isSmall ? "-10px" : "-30px" }}>
        <Card />
        </Grid>

        {/* two banners */}
        <Grid item xs={12} sm={12} sx={{ marginTop: "-60px" }}>
        <OfferBanner
          configDate={configData}
          landingPageData={landingPageData}
        />
      </Grid>
        <CustomContainer>
        <Grid item xs={12} sm={12} sx={{ marginTop: isSmall ? "-50px" : "-70px" }}>
          <VisitAgain configData={configData} />
        </Grid>

        </CustomContainer>

        {/* three banners */}
        <Grid item sx={{  marginTop: isSmall ? "-40px" : "-40px" }}>
        {landingPageData?.promotion_banners?.length > 0 && (
          <Banners landingPageData={landingPageData} isSmall={isSmall} />
        )}
        </Grid>
        {/* <ComponentOne
          landingPageData={landingPageData}
          configData={configData}
          handleOrderNow={handleOrderNow}
        /> */}
        <Grid item xs={12} md={12} sx={{  marginTop: isSmall ? "-45px" : "-50px" }}>
          <ComponentThree
            configData={configData}
            landingPageData={landingPageData}
          />
        </Grid>
        <Grid item xs={12} md={12} sx={{ marginTop: isSmall ? "" : "-10px" }}>
          <h1 style={{ marginLeft: isSmall ? "20px" : "280px", fontSize: isSmall ? "14px" : "25px" }}>New Arrivals</h1>
          {landingPageData?.fixed_promotional_banner && (
            <CustomBoxFullWidth>
              <DiscountBanner
                bannerImage={`${landingPageData?.base_urls?.promotional_banner_url}/${landingPageData?.fixed_promotional_banner}`}
                isSmall={isSmall}
              />
            </CustomBoxFullWidth>
          )}
        </Grid>
        <Grid xs={12} sm={12} sx={{ marginTop: "-40px" }}>
        {(landingPageData?.earning_title ||
          landingPageData?.earning_sub_title ||
          landingPageData?.earning_seller_title ||
          landingPageData?.earning_seller_sub_title ||
          landingPageData?.earning_dm_title ||
          landingPageData?.earning_dm_sub_title) && (
            <Registration data={landingPageData} isSmall={isSmall} />
          )}
          </Grid>
      <Grid item xs={12} sm={12} sx={{ marginTop: isSmall ? "-10px" : "-40px" }}>
        <PopularStore />
      </Grid>

        <Grid item xs={12} sx={{ marginTop: isSmall ? "" : "20px" }}>
          <CustomContainer>
            <SpecialFoodOffers />
          </CustomContainer>
        </Grid>

        <ComponentTwo
          configData={configData}
          landingPageData={landingPageData}
        />
        <CustomContainer>
        <Grid item xs={12} sx={{ marginTop: isSmall ? "10px" :"-30px" }}>
          <Stores />
        </Grid>
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
        <CityComponent />
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