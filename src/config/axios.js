import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken } from "../util/localStorage";
// add axios interceptor


axios.defaults.baseURL = BACKEND_URL;
axios.interceptors.request.use((config) => {
    const token = getAccessToken()
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});

export default axios;
