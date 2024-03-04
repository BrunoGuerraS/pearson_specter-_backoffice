import { useNavigate } from "react-router-dom";
import { loginService } from "../service/auth.service";
import { ls } from "../utils";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const loginExec = async (loginData: LoginData) => {
    try {
      const res = await loginService(loginData);
      if (res.status === 200) {
        for (const key in res.data) {
          ls.setItem(key, res.data[key]);
        }
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { loginExec };
};
