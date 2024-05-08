import React from "react";
import Button from "@mui/material/Button"; // Import Button from Material-UI

const ListYourBusiness = ({ handleListYourBusiness }) => {
  const theme = useTheme();
  const router = useRouter(); // Assuming useRouter is imported and defined properly

  const handleList = () => {
    if (router.pathname === "") {
      router.push({
        pathname: "",
      }, undefined, { shallow: true });
    } else {
      router.push({
        pathname: "",
      }, undefined, { shallow: true });
    }
  };

  return (
    <>
      <Stack justifyContent="flex-end" alignItems="end">
        <Button onClick={handleList} variant="contained"> {/* Use Button instead of ListButton */}
          <CustomStackFullWidth direction="row" alignItems="center" spacing={1}>
            <Typography color={theme.palette.whiteContainer.main}>
              {t("List Your Business")}
            </Typography>
          </CustomStackFullWidth>
        </Button>
      </Stack>
    </>
  );
};

export default ListYourBusiness;
