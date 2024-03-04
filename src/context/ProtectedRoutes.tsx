import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hook/useUser";
import { ls } from "../utils";

export const ProtectedRoutes = () => {
  const isLogged = ls.getItem("isLogged");
  const { userDispatch } = useUser();
  

 

  return isLogged ? <Outlet /> : <Navigate to="/" />;
};
