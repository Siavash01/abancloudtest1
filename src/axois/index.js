import axios  from "axios";
import { getToken } from "../utils/tokenstorage";

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + getToken();
     
    return config;
});

export default axios;