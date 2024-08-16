import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  let parsedAuthUser;
  try {
    parsedAuthUser = initialAuthUser ? JSON.parse(initialAuthUser) : null;
  } catch (error) {
    console.error("Failed to parse stored user data:", error);
    parsedAuthUser = null; // Handle the case where parsing fails
  }

  const [authUser, setAuthUser] = useState(parsedAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
