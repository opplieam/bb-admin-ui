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

export class CategoryApiClient<T, R> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getUnmatchedCategory = ({ page, page_size }) => {
    return axiosInstance
      .get<T>(this.endpoint, { params: { page: page, page_size: page_size } })
      .then(res => res.data);
  };

  getAllCategory = () => {
    return axiosInstance.get<T>(this.endpoint).then(res => res.data);
  };

  updateCategory = (data: R) => {
    return axiosInstance.patch<T>(this.endpoint, data).then(res => res.data);
  };
}
