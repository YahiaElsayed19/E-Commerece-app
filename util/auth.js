import axios from "axios";

const baseApi = axios.create({
    baseURL: "https://student.valuxapps.com/api/",
});
export const Register = function (name, email, password) {
    return baseApi.get("register", {
        params: { name: name, email: email, password: password },
    });
};
