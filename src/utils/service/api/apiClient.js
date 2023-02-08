import axios from "axios";
import { store } from "../../redux/store";

const apiClient = axios.create({
  baseURL: "http://192.168.1.90:3051/api/",
});

apiClient.interceptors.request.use(
  async (config) => {
    const _token = store.getState().user.token;
    if (_token) {
      config.headers.Authorization = `Bearer ${_token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default apiClient;
