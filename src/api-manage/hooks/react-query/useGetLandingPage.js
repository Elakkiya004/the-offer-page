import MainApi from "../../MainApi";
import {landing_page_api} from "../../ApiRoutes";
import {useQuery} from "react-query";

const getData = async () => {
    const { data } = await MainApi.get(landing_page_api);
    return data;
};
const logData = async () => {
    try {
        const result = await getData();
    } catch (error) {
        console.error('Error:', error);
    }
};

logData();
export default function useGetLandingPage() {
    return useQuery("landing-page-data", getData, {
        enabled: false,
    });
}