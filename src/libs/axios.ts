import axios from "axios";
import { useAuthStore } from "../store/auth";


const authApi = axios.create({
  baseURL: "https://citas-medicas-nu.vercel.app/api/v1",
  withCredentials: true,
});

authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers.set("Authorization", `Bearer ${token}`);
  return config;
});

export default authApi;
