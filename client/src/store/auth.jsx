import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null); // Initialize as null
  const authorizationToken = `Bearer ${token}`

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update token state
  };

  const isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);
  const LogoutUser = () => {
    setToken(null);
    setUser(null); // Clear user on logout
    localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    if (!token) return; // Exit if no token
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data:", data.userData);
        setUser(data.userData);
      } else {
        console.log("Error on fetching user data");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]); // Fetch user data when the token changes

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
