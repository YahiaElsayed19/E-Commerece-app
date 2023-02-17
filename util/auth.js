import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/";

export const Register = function (name, email, password, phone) {
    const response = axios.post(`${baseURL}register`, {
        name,
        email,
        password,
        phone,
    }, {
        headers: {
            lang: "en",
        }
    });
    return response;
};
export const Login = function (email, password) {
    const response = axios.post(`${baseURL}login`, {
        email,
        password,
    }, {
        headers: {
            lang: "en",
        }
    });
    return response;
};
