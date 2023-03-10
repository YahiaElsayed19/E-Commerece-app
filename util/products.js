import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/";

export const getProducts = function (Authorization,category_id) {
    const response = axios.get(`${baseURL}products?category_id`, {
        headers: {
            lang: "en",
            Authorization: Authorization,
        },
        params: {
            category_id: category_id,
        },
    });
    return response;
};


export const toggleFav = function (Authorization, productId) {
    const response = axios.post(
        `${baseURL}favorites`,
        {
            product_id: productId,
        },
        {
            headers: {
                Authorization: Authorization,
                lang: "en",
            },
        }
    );
    return response;
};
export const getFav = function (Authorization) {
    const response = axios.get(`${baseURL}favorites`, {
        headers: {
            Authorization: Authorization,
            lang: "en",
        },
    });
    return response;
};
export const toggleCart = function (Authorization, productId) {
    const response = axios.post(
        `${baseURL}carts`,
        {
            product_id: productId,
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
export const getCart = function (Authorization) {
    const response = axios.get(`${baseURL}carts`, {
        headers: {
            Authorization: Authorization,
            lang: "en",
        },
    });
    return response;
};
