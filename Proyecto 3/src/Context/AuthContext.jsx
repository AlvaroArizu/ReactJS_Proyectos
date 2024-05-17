import React, { useContext, useState } from "react";


export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(
    localStorage.getItem("login") ? true : false
  );

  const userLocalStorage = localStorage.getItem("user");
  const [user, setUser] = useState(
    userLocalStorage ? JSON.parse(userLocalStorage) : {}
  );

  const handleLogin = (responseUser) => {
    setLogin(true);
    localStorage.setItem("login", "true");
    setUser(responseUser);
    localStorage.setItem("user", JSON.stringify(responseUser));
  };

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem("login");
    setUser({});
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ login, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);