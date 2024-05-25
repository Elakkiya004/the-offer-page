import React from "react";
import { Box, Grid } from "@mui/material";

import { useSelector } from "react-redux";

import useMediaQuery from "@mui/material/useMediaQuery";
import ProductCard from "../cards/ProductCard";
import CustomPagination from "../custom-pagination";
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const TRACKING_ID = "G-FECBMFT6KW";

export default function ProductList({
  product_list,
  page_limit = 10,
  offset,
  setOffset,
}) {

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

  const matches = useMediaQuery("(max-width:1180px)");
  return (
    <>
      <>
        {product_list?.products?.map((product) => (
          <Grid key={product?.id} item sm={4} xs={12} md={matches ? 3 : 2.4}>
            <ProductCard
              sm={1}
              xs={1}
              item={product}
              changed_bg="true"
              //productImageUrl={global?.base_urls?.product_image_url}
            />
          </Grid>
        ))}
      </>

      {product_list?.total_size > page_limit ? (
        <Grid item xs={12} sm={12} md={12} align="center">
          <CustomPagination
            total_size={product_list?.total_size}
            page_limit={page_limit}
            offset={offset}
            setOffset={setOffset}
          />
        </Grid>
      ) : (
        ""
      )}
    </>
  );
}
