import {
  loginService,
  logoutService,
  singupService,
} from "../service/auth.service";
import {
  LoginDataInterface,
  SingUpDataInterface,
  useAuthInterface,
} from "../types/users.types";
import { ls } from "../utils";
import { today } from "../utils/time.utils";
import { useUser } from "./useUser";

export const useAuth = (): useAuthInterface => {
  const { userState, userDispatch } = useUser();

  const login = async (data: LoginDataInterface): Promise<void> => {
    try {
      const serviceResponse = await loginService(data);
      Object.keys(serviceResponse.data).forEach((key) => {
        ls.setItem(key, serviceResponse.data[key]);
      });
      ls.setItem("isLogged", today);
      console.log('token', ls.getItem('token'));
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const signup = async (data: SingUpDataInterface): Promise<void> => {
    const serviceResponse = await singupService(data);
    userDispatch({
      type: "createUser",
      payload: serviceResponse as unknown as SingUpDataInterface,
    });
  };

  const logout = async (): Promise<void> => {
    try {
      await logoutService();
      ls.removeItem("isLogged");
      userDispatch({
        type: "resetUser",
      });
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  return { login, signup, logout, isLogged: Boolean(userState.token) };
};
