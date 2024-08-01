import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState("user", null);
  //console.log(user)
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    //setUser(data);
    navigate("/discounts");
  };

  // call this function to sign out logged in user
  const logout = () => {
    //setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      //user,
      login,
      logout,
    }),
    []
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};