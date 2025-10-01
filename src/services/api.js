import axios from "axios";

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

      try {
        await axios.post(
          `${API_URI}/api/auth/refresh`,
          {},
          { withCredentials: true }
        );

        return privateApi.request(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
