"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { AuthContextType, UserCredential } from "../type";

const AuthContext = createContext<AuthContextType | null>(null);
const { Provider } = AuthContext;

const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<UserCredential>({
    user: {
      name: "",
      email: "",
      profilePic: "",
      uid: "",
    },
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setAuthState({ user });
  }, []);

  const setUserAuthInfo = (data: UserCredential) => {
    localStorage.setItem("user", JSON.stringify(data.user));
    setAuthState(data);
  };

  const isUserAuthenticated = () => {
    return !!authState.user;
  };

  return (
    <Provider
      value={{
        authState,
        setUserAuthInfo,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, useAuth };
