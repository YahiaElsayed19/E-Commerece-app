import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/"

export const getProducts = function name(catId,page) {
    const response = axios.get(`${baseURL}products?`, {
        params: {
            category_id: catId
        }, headers: {
            lang: "en"
        }
    })
    return response
}