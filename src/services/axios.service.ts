import axios from "axios";
import {API_KEY, API_KEY_V4, baseURL} from "../constants";


const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(res => {
    res.url = res.url + 'api_key='+ API_KEY
    return res
})


export {
    baseURL,
    axiosService
}