import React, { useState } from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
import { NavLinkStyle } from "../NavBar.style";

import dynamic from "next/dynamic";

const NavLinks = ({ zoneid, t, moduleType }) => {
  const [openCategoryModal, setCategoryModal] = useState(false);
  const [openRestaurantModal, setRestaurantModal] = useState(false);
  const NavStore = dynamic(() => import("./NavStore"), {
    ssr: false,
  });
  const NavCategory = dynamic(() => import("./NavCategory"), {
    ssr: false,
  });

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1.3}
     
      sx={{ paddingLeft: "20px" }}
    >
      {zoneid && (
        <>
          <Link href="/home">
            <NavLinkStyle
              underline="none"
              // language_direction={language_direction}
              sx={{ cursor: "pointer", fontWeight:'bold' }}
            >
              {t("Home")}
            </NavLinkStyle>
          </Link>
          {moduleType !== "parcel" ? (
            <>
              <NavCategory
                openModal={openCategoryModal}
                setModal={setCategoryModal}
                setRestaurantModal={setRestaurantModal}
              />
              <NavStore
                openModal={openRestaurantModal}
                setModal={setRestaurantModal}
              />
              <Link href="/referral-code">
            <NavLinkStyle
              underline="none"
              // language_direction={language_direction}
              sx={{ cursor: "pointer"}}
            >
              {t("Refer & Earn")}
            </NavLinkStyle>
          </Link>
            </>
          ) : (
            <Link href="/help-and-support">
              <NavLinkStyle
                underline="none"
                // language_direction={language_direction}
                sx={{ cursor: "pointer" }}
              >
                {t("Contact")}
              </NavLinkStyle>
            </Link>
          )}
          <Link href="/list-your-business">
                <NavLinkStyle
                  underline="none"
                  sx={{ cursor: "pointer"}}
                >
                  {t("List Your Business")}
                </NavLinkStyle>
              </Link>
        </>
      )}
    </Stack>
  );
};

NavLinks.propTypes = {};

export default React.memo(NavLinks);
