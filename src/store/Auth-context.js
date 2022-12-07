import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({
  user: {},
  createUserHandler: () => {},
  signInHandler: () => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});

  const createUserHandler = async (name, email, password, repassword) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutHandler = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, createUserHandler, signInHandler, logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
