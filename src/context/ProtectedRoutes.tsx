import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hook/useUser";
import { ls } from "../utils";

export const ProtectedRoutes = () => {
  const isLogged = ls.getItem("isLogged");
  const {userState, userDispatch } = useUser();
  
  useEffect(() => {
    const user = JSON.parse(ls.getItem("user") as string)
    userDispatch({ type: "createUser", payload: user });
  }, []);
 

  return isLogged ? <Outlet /> : <Navigate to="/" />;
};
