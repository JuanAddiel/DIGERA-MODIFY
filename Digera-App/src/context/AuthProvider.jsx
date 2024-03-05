import { createContext, useContext, useEffect, useState } from "react";
import {
  loginRequest,
  registerRequest,
  verityTokenRequest,
} from "../api/login/register";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setError] = useState(null);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);

      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      setLoading(false);

      setIsAuthenticated(true);
    } catch (error) {
      setError(error.response.data.message);
    } // Puedes ajustar el tiempo en milisegundos según tus necesidades
  };

  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (errors != null) {
      const errorTimeout = setTimeout(() => {
        setError(null);
      }, 5000);

      return () => clearTimeout(errorTimeout);
    }
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get("token");
      const res = await verityTokenRequest(token);
      localStorage.setItem("user", JSON.stringify(res.data));
      setIsAuthenticated(true);
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        isAuthenticated,
        errors,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
