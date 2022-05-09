import axios from "axios";
import {LS} from "../loacalStorage/localStorage";

const instance = axios.create({
  baseURL: 'https://conduit.productionready.io/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use((config) => {
  const token = LS.getToken()
  if (token && config && config.headers) {
    config.headers.Authorization = `Token ${token}`
  }
  return config
})

export default instance
