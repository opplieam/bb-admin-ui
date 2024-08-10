import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/v1",
  withCredentials: true
});

class ApiClient<T, R> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  authenticate = (data: R) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  };

  logout = () => {
    return axiosInstance.delete<T>(this.endpoint).then(res => res.data);
  };
}

export default ApiClient;
