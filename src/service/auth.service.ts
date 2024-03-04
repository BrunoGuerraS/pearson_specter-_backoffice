import axios, { AxiosResponse } from "axios";
import { api } from "../interceptor/private.interceptor";
import { LoginDataInterface, SingUpDataInterface } from "../types/users.types";
const URL = "http://localhost:3003/api/v1";

export const loginService = async (data: LoginDataInterface): Promise<AxiosResponse> => {
  return await axios.post(`${URL}/login`, data, {
    withCredentials: true,
  });
};

export const getUserDataService = async (): Promise<AxiosResponse> => {
  return await api.get("/user", {
    withCredentials: true,
  });

}

export const singupService = async (
  data: SingUpDataInterface
): Promise<unknown> => {
  const res = await api.post("/register", data, {
    withCredentials: true,
  });
  return res;
};

export const logoutService = async (): Promise<void> => {
  return await api.get("/logout", {
    withCredentials: true,
  });
};

export const refreshService = async () => {
  return await api.get("/refresh", {
    withCredentials: true,
  });
};
