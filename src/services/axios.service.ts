import axios from "axios";
import {baseURL} from "../constants";


const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(res => {
    res.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2E0MDdmMjY2OWEyNmFlZGQyNmQ3NGMyYzcxYWZkNSIsInN1YiI6IjY0NWU5MDdiYWFmZWJkMDE0NGE0NDkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqERnZu6praeyNDilUZ4MNhW_pNtt_MWvoH3CuGrzAQ';
    return res
})


export {
    baseURL,
    axiosService
}