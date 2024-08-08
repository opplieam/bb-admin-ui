import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/v1"
});

axiosInstance.interceptors.request.use(function(
  config: InternalAxiosRequestConfig
) {
  const token: string = localStorage.getItem("token");
  if (!token) {
    console.error("No token");
  }
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

class AccountApiClient<T, R> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllUsers = () => {
    return axiosInstance.get<T>(this.endpoint).then(res => res.data);
  };

  createUser = (data: R) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  };

  updateUser = (data: R) => {
    return axiosInstance.patch<T>(this.endpoint, data).then(res => res.data);
  };
}

export default AccountApiClient;
