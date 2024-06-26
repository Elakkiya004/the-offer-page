import {useTranslation} from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import PolicyPage from "../../src/components/policy-page";
import useGetPolicyPage from "../../src/api-manage/hooks/react-query/useGetPolicyPage";
import React, {useEffect} from "react";
import {getServerSideProps} from "../index";
import SEO from "../../src/components/seo";

const Index = ({configData, landingPageData}) => {
    const {t} = useTranslation();
    const {data, refetch, isFetching} = useGetPolicyPage("/cancelation");
    useEffect(() => {
        refetch();
    }, [refetch]);
    return (
        <>
            <CssBaseline/>
            <SEO
                title={configData ? `Cancellation policy` : "Loading..."}
                image={`${configData?.base_urls?.business_logo_url}/${configData?.fav_icon}`}
                businessName={configData?.business_name}
            />
            <MainLayout configData={configData} landingPageData={landingPageData}>
                <PolicyPage
                    data={data}
                    title={t("Cancellation policy")}
                    isFetching={isFetching}
                />
            </MainLayout>
        </>
    );
};

export default Index;
export {getServerSideProps}
