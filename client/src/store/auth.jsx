import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storetokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={{ storetokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>{
    return useContext(AuthContext)
}