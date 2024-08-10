import { InternalAxiosRequestConfig } from "axios";

export function addAuthHeaderInterceptor(config: InternalAxiosRequestConfig) {
  const token: string = localStorage.getItem("token");
  if (!token) {
    console.error("No token");
  }
  config.headers["Authorization"] = "Bearer " + token;
  return config;
}
