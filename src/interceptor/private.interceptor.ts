import axios from "axios";
import { refreshService } from "../service/auth.service";
import { ls } from "../utils";

const URL = "http://localhost:3003/api/v1";

export const api = axios.create({
  baseURL: `${URL}`,
});

api.interceptors.request.use(
    (config) => {
      const token = ls.getItem("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.response.data.errors === "jwt expired"
      ) {
        console.log("estoy entrando al error del reposnse interceptor")
        try {
          const response = await refreshService();
          console.log("response", response.data.token);
          ls.setItem("token", response.data.token);
          originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
  );
  