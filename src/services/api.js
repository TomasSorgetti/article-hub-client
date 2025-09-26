import axios from "axios";

const API_URI = import.meta.env.VITE_API_URI;

export const publicApi = axios.create({
  baseURL: API_URI || "http://localhost/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateApi = axios.create({
  baseURL: API_URI || "http://localhost/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
