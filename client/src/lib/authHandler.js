import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await axios.get(
          `http://${process.env.REACT_APP_API_DOMAIN}/api/v1/auth/is_authenticated`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const isAuthenticatedStatus = res.data.isAuthenticated;
        setIsAuthenticated(isAuthenticatedStatus);
        if (isAuthenticatedStatus) {
          const res = await axios.get(
            `http://${process.env.REACT_APP_API_DOMAIN}/api/v1/auth/current_user`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          setUser(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    initAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
