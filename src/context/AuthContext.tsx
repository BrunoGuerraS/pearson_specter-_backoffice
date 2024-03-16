import { FC, createContext, useReducer } from "react";
import { UserInterface } from "../types/users.types";

export interface ActionUserInterface {
  type: string;
  payload?: NonNullable<unknown> | UserInterface;
}

export interface AuthContextType {
  userState: UserInterface;
  userDispatch: (arg0: ActionUserInterface) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const initialState: UserInterface = {
  username: "",
  name: "",
  last_name: "",
  email: "",
  role: "",
  token: "",
};

const reducer = (state: UserInterface, action: ActionUserInterface) => {
  switch (action.type) {
    case "createUser":
      return { ...(action.payload as UserInterface) };
    case "updateUser":
      return { ...state, ...action.payload };
    case "resetUser":
      return initialState;
    default:
      return initialState;
  }
};

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: AuthContextType = { userState: state, userDispatch: dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
