import React, {
  Fragment,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export interface AuthContextInterface {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string | null) => void;
  logout: () => void;
}

export const authContextDefaults: AuthContextInterface = {
  token: null,
  isAuthenticated: false,
  login: (token: string | null) => null,
  logout: () => null,
};

export const AuthContext =
  React.createContext<AuthContextInterface>(authContextDefaults);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = useCallback((token: string | null) => {
    if (token) {
      setToken(token);
      setIsAuthenticated(true);
      localStorage.setItem("vpt-token", JSON.stringify(token));
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("vpt-token");
  }, []);

  useEffect(() => {
    console.log("auth use effect");
    let storedToken;
    if (localStorage["vpt-token"]) {
      storedToken = JSON.parse(localStorage.getItem("vpt-token") || "");
    }

    if (storedToken) login(storedToken);
  }, [login]);

  const value = {
    isAuthenticated,
    token,
    login,
    logout,
  };

  return (
    <Fragment>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </Fragment>
  );
};
