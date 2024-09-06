import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("")
  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isloggedin", isLoggedIn);

  //tackling the logout function
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //jwt authentication - to get the logged in user data
const userAuthentication = async() =>{
  try {
    const response = await fetch("http://localhost:5000/api/auth/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    if(response.ok){
      const data = await response.json()
      console.log("this is userdata", data);
      
      setUser(data)

    }
  } catch (error) {
    console.log("error on fetching user data", error);
    
  }
}

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
