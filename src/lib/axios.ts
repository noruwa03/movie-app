import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer `;
  return config;
});
