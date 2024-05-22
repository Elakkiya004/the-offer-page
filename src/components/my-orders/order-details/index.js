import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useGetOrderDetails from "../../../api-manage/hooks/react-query/order/useGetOrderDetails";
import useGetTrackOrderData from "../../../api-manage/hooks/react-query/order/useGetTrackOrderData";
import OtherOrder from "./other-order";
import { getGuestId } from "../../../helper-functions/getToken";
import {useSelector} from "react-redux";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-FECBMFT6KW";


const OrderDetails = ({ configData, id }) => {

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
  }, []);

  const router = useRouter();
  const guestId = getGuestId();
  const { guestUserInfo } = useSelector((state) => state.guestUserInfo);
  const phone=guestUserInfo?.contact_person_number
  const {
    refetch,
    data,
    isRefetching,
    isLoading: dataIsLoading,
  } = useGetOrderDetails(id, guestId);
  const { refetch: refetchTrackOrder, data: trackOrderData } =
    useGetTrackOrderData(id, phone,guestId);
  useEffect(() => {
    refetch();
    refetchTrackOrder();
  }, [id]);

  return (
    <div>
      <OtherOrder
        configData={configData}
        data={data}
        refetch={refetch}
        id={id}
        dataIsLoading={dataIsLoading}
      />
    </div>
  );
};

OrderDetails.propTypes = {};

export default OrderDetails;
