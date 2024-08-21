import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CustomStackFullWidth,
} from "../../../styled-components/CustomStyles.style";
import { DeliveryCaption } from "../CheckOut.style";
import DeliveryAddress from "../delivery-address";
import { Stack, Typography } from "@mui/material";
import {
  DeliveryOptionButton,
} from "../../../styled-components/CustomButtons.style";
import homeImg from "../assets/image 1256.png";
import takeaway from "../assets/takeaway.png";
import schedule from "../assets/schedule.png";
import CustomImageContainer from "../../CustomImageContainer";
import { useTheme } from "@emotion/react";
import ScheduleDelivery from "./ScheduleDelivery";
import RestaurantScheduleTime from "./RestaurantScheduleTime";

const DeliveryDetails = (props) => {
  const {
    storeData,
    setOrderType,
    orderType,
    setAddress,
    address,
    configData,
    forprescription,
    setDeliveryTip,
    customDispatch,
    scheduleTime,
    setDayNumber,
    handleChange,
    today,
    tomorrow,
    numberOfDay,
    setScheduleAt,
  } = props;
  const { t } = useTranslation();
  const theme = useTheme();
  const [showSchedule, setShowSchedule] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleOrderType = (value) => {
    if (value === "take_away") {
      setDeliveryTip(0);
    }
    setOrderType(value);
    // Show ScheduleDelivery if the order type is delivery or take_away
    if (value === "delivery" || value === "take_away") {
      setShowSchedule(true);
    } else {
      setShowSchedule(false);
    }
  };

  return (
    <CustomStackFullWidth spacing={{ xs: 1.5, md: 3 }}>
      <DeliveryCaption id="demo-row-radio-buttons-group-label">
        {t("Delivery Options")}
        {/* Show ScheduleDelivery component based on state */}
        {showSchedule && <ScheduleDelivery />}
      </DeliveryCaption>
      {storeData && (
        <Stack
          direction="row"
          width="100%"
          justifyContent={{ xs: "flex-start", md: "space-between" }}
          gap={{ xs: "5px", md: "10px" }}
          sx={{ flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" } }}
        >
          <DeliveryOptionButton
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            fullwidth="true"
            orderType={orderType === "delivery"}
            onClick={() => handleOrderType("delivery")}
            hover="true"
            sx={{
              "&:hover": {
                color: (theme) => theme.palette.whiteContainer.main,
              },
            }}
          >
            <CustomImageContainer
              src={homeImg.src}
              width="30px"
              height="30px"
              smWidth="20px"
              smHeight="20px"
            />
            <Typography
              className="text"
              fontSize={{ xs: "12px", md: "14px" }}
              fontWeight={orderType === "delivery" ? "600" : "400"}
              color={
                orderType === "delivery"
                  ? theme.palette.whiteContainer.main
                  : theme.palette.neutral[700]
              }
            >
              {t("Home Delivery")}
              {showText && <span style={{ marginLeft: '-15px', fontSize: "14px" }}>Coming Soon</span>}
            </Typography>
          </DeliveryOptionButton>

          {!forprescription && (
            <DeliveryOptionButton
              fullwidth="true"
              orderType={orderType === "take_away"}
              onClick={() => handleOrderType("take_away")}
            >
              <CustomImageContainer
                src={takeaway.src}
                width="30px"
                height="30px"
                smWidth="20px"
                smHeight="20px"
              />
              <Typography
                className="text"
                fontSize={{ xs: "12px", md: "14px" }}
                fontWeight={orderType === "take_away" ? "600" : "400"}
                color={
                  orderType === "take_away"
                    ? theme.palette.whiteContainer.main
                    : theme.palette.neutral[700]
                }
              >
                {t("I’ll Pick It Up MySelf")}
              </Typography>
            </DeliveryOptionButton>
          )}

          {storeData?.schedule_order && (
            <DeliveryOptionButton
              fullwidth="true"
              orderType={orderType === "schedule_order"}
              onClick={() => handleOrderType("schedule_order")}
            >
              <CustomImageContainer
                src={schedule.src}
                width="30px"
                height="30px"
                smWidth="20px"
                smHeight="20px"
              />
              <Typography
                className="text"
                fontSize={{ xs: "12px", md: "14px" }}
                fontWeight={orderType === "schedule_order" ? "600" : "400"}
                color={
                  orderType === "schedule_order"
                    ? theme.palette.whiteContainer.main
                    : theme.palette.neutral[700]
                }
              >
                {t("Schedule Delivery")}
              </Typography>
            </DeliveryOptionButton>
          )}
        </Stack>
      )}
      {orderType === "schedule_order" && (
        <RestaurantScheduleTime
          storeData={storeData}
          handleChange={handleChange}
          today={today}
          tomorrow={tomorrow}
          numberOfDay={numberOfDay}
          configData={configData}
          setScheduleAt={setScheduleAt}
        />
      )}
      <DeliveryAddress
        setAddress={setAddress}
        address={address}
        configData={configData}
        storeZoneId={storeData?.zone_id}
        orderType={orderType}
      />
    </CustomStackFullWidth>
  );
};

DeliveryDetails.propTypes = {};

export default DeliveryDetails;
