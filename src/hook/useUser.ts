import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/AuthContext";

export const useUser = (): AuthContextType => useContext(AuthContext) as AuthContextType; 