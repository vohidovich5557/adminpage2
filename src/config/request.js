import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({ baseURL: "https://adminserver-plum.vercel.app/" });

request.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${Cookies.get("user-token")}`,
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { request };
