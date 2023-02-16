import axios from "axios";

const baseURL = "https://student.valuxapps.com/api/";

export const Register = function (name, email, password, phone) {
    const response = axios.post(`${baseURL}register`, {
        name,
        email,
        password,
        phone,
    });
    return response;
};
