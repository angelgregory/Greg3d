import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

export const apiClient = axios.create({
   baseURL: url,
});
