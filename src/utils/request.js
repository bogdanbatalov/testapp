import axios from "axios";

const request = axios.create({
  headers: {
    post: {
      Accept: "application/json",
    },
    common: {
      Accept: "application/json",
    },
  },
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 30000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status !== 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default request;
