export interface UserInterface {
  username: string;
  name: string;
  last_name: string;
  email: string;
  role: string;
  token: string;
}

export interface LoginDataInterface {
  email: string;
  password: string;
}

export interface SingUpDataInterface {
  name: string;
  username: string;
  last_name: string;
  email: string;
  password: string;
}

export interface useAuthInterface {
    signup: (data: SingUpDataInterface) => Promise<void>;
    login: (data: LoginDataInterface) => Promise<void>;
    logout: () => Promise<void>;
    isLogged: boolean
}
