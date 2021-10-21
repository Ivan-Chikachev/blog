import axios from "axios";
import { LS } from "../loacalStorage/localStorage";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://conduit-api-realworld.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json'
    },
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Token ${LS.getToken()}`
    return config
})

export default instance
