import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/"

export const getProducts = function () {
    const response = axios.get(`${baseURL}products?category_id`, {
        headers: {
            lang: "en"
        }
    })
    return response
}