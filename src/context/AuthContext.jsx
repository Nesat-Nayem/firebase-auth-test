import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const contextValue = {
    currentUser
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
