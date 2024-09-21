import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React from "react";
import { ButtonLeft, ButtonRight } from "./index";
import { alpha, styled, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { getLanguage } from "../../../helper-functions/getLanguage";
import { getCurrentModuleType } from "../../../helper-functions/getCurrentModuleType";
import { WhiteNext, WhitePrev } from "../visit-again/SliderSettings";
import { ModuleTypes } from "../../../helper-functions/moduleTypes";

// Styling for the button container
const ButtonContainer = styled(Box)(({ theme, right, isdisabled }) => ({
  top: "80px",
  zIndex: 1,
  right: right === "true" && 0,
  left: right !== "true" && 0,
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  display: isdisabled ? "none" : "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// Styling for the Prev button wrapper with red arrow color
const PrevWrapper = styled(Box)(({ theme, isdisabled }) => ({
  zIndex: 1,
  top: "40%",
  left: "-50px",
  display: isdisabled ? "none" : "flex",
  background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.2)} 54.03%, ${alpha(theme.palette.primary.main, 0.3)} 100%)`,
  borderRadius: "50%",
  color: "red",
  height: "40px",
  width: "40px",
}));

const NextWrapper = styled(Box)(({ theme, isdisabled }) => ({
  top: "50%",
  zIndex: 1,
  right: "-10px",
  display: isdisabled ? "none" : "flex",
  background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.2)} 54.03%, ${alpha(theme.palette.primary.main, 0.3)} 100%)`,
  borderRadius: "50%",
  color: "red",
  height: "40px",
  width: "40px",
}));


// Custom Next button component
const Next = ({ onClick, className, displayNoneOnMobile }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const displayNone = isSmall ? (displayNoneOnMobile ? true : false) : false;
  return (
    <ButtonContainer
      isdisabled={displayNone || className?.includes("slick-disabled")}
      right="true"
    >
      <NextWrapper
        className={`client-nav client-next ${className}`}
        onClick={onClick}
        isdisabled={className?.includes("slick-disabled")}
      >
        {getLanguage() === "rtl" ? <PrevIcon /> : <NextIcon />}
      </NextWrapper>
    </ButtonContainer>
  );
};

// Custom Prev button component
const Prev = ({ onClick, className, displayNoneOnMobile }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const displayNone = isSmall ? (displayNoneOnMobile ? true : false) : false;
  return (
    <ButtonContainer
      isdisabled={displayNone || className?.includes("slick-disabled")}
    >
      <PrevWrapper
        className={`client-nav client-prev ${className}`}
        onClick={onClick}
        isdisabled={className?.includes("slick-disabled")}
      >
        {getLanguage() === "rtl" ? <NextIcon /> : <PrevIcon />}
      </PrevWrapper>
    </ButtonContainer>
  );
};

// Custom icons with red color applied (No redefinition)
const PrevIcon = (props) => (
  <KeyboardArrowLeftIcon {...props} style={{ color: "red", fontSize: "40px" }} /> // Red color
);

const NextIcon = (props) => (
  <KeyboardArrowRightIcon {...props} style={{ color: "red", fontSize: "40px" }} /> // Red color
);

// Module-wise rendering for Next button
export const moduleWiseNext = () => {
  switch (getCurrentModuleType()) {
    case ModuleTypes.GROCERY:
      return <Next displayNoneOnMobile />;
    case ModuleTypes.PHARMACY:
      return <WhiteNext noboxshadow displayNoneOnMobile />;
    case ModuleTypes.ECOMMERCE:
      return <Next displayNoneOnMobile />;
    case ModuleTypes.FOOD:
      return <WhiteNext noboxshadow displayNoneOnMobile />;
  }
};

// Module-wise rendering for Prev button
export const moduleWisePrev = () => {
  switch (getCurrentModuleType()) {
    case ModuleTypes.GROCERY:
      return <Prev displayNoneOnMobile />;
    case ModuleTypes.PHARMACY:
      return <WhitePrev noboxshadow />;
    case ModuleTypes.ECOMMERCE:
      return <Prev displayNoneOnMobile />;
    case ModuleTypes.FOOD:
      return <WhitePrev displayNoneOnMobile noboxshadow />;
  }
};
