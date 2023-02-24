import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/";

export const getSearchData = function (Authorization, text) {
    const response = axios.post(
        `${baseURL}products/search`,
        {
            text: text,
        },
        {
            headers: {
                lang: "en",
                Authorization: Authorization,
            },
        }
    );
    return response;
};
