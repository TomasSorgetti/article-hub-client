import axios from "axios";
import { useAuthStore } from "../lib/store/auth";

const API_URI = import.meta.env.VITE_API_URI;

export const publicApi = axios.create({
  baseURL: `${API_URI}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateApi = axios.create({
  baseURL: `${API_URI}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refresh, logout } = useAuthStore.getState();

      try {
        await refresh();
        return privateApi.request(originalRequest);
      } catch (err) {
        console.log(err);
        await logout();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
