/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  // USER STATE
  const [user, setUser] = useState(null);

  // CREATE USER ACCOUNT
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //SIGN IN USER
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // OBSERVE USER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Observing");
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { createUser, signIn, user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
