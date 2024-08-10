import axios from "axios";
import { addAuthHeaderInterceptor } from "./addAuthHeaderInterceptor.ts";
import { refreshTokenInterceptor } from "./refreshTokenInterceptor.ts";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/v1",
  withCredentials: true
});

axiosInstance.interceptors.request.use(addAuthHeaderInterceptor);
axiosInstance.interceptors.response.use(
  response => response,
  error => refreshTokenInterceptor(error, axiosInstance)
);

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
