import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/v1"
});

class ApiClient<T, R> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  authenticate = (data: R) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  };
}

export default ApiClient;
