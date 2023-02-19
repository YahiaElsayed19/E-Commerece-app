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

export const toggleFav = function (Authorization, productId) {
    const response = axios.post(
        `${baseURL}favorites`,
        {
            "product_id": productId,
        },
        {
            headers: {
                Authorization: Authorization,
                lang: "en",
            },
        },
    );
    return response;
};
export const toggleCart = function (Authorization, productId) {
    const response = axios.post(
        `${baseURL}carts`,
        {
            "product_id": productId,
        },
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
