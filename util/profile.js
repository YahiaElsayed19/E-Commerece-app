import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/"

export const getProfileData = function (Authorization) {
    const response = axios.get(`${baseURL}profile`, {
        headers: {
            lang: "en",
            Authorization: Authorization,
        }
    });
    return response;
};