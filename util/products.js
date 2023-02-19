import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/";

export const getProducts = function () {
    const response = axios.get(`${baseURL}products?category_id`, {
        headers: {
            lang: "en",
        },
    });
    return response;
};

export const addToFav = function (Authorization, productId) {
    const response = axios.post(
        `${baseURL}favorites`,
        {
            headers: {
                Authorization: Authorization,
                lang: "en",
            },
        },
        {
            "product_id": productId,
        }
    );
    return response;
};
export const addToCart = function (Authorization, productId) {
    const response = axios.post(
        `${baseURL}carts`,
        {
            headers: {
                Authorization: Authorization,
                lang: "en",
            },
        },
        {
            "product_id": productId,
        }
    );
    return response;
};
