import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../helpers/firebase";
import { createContext, useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //useState
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // userInfo
  const [user, setUser] = useState({});
  // Custom Func
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsub();
    };
  }, []);

  const register = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(() =>
        updateProfile(auth.currentUser, {
          displayName: userName,
        }).then(() => window.location.replace("/login"))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const login = () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(() =>
        window.location.replace("/")
      );
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    try {
      signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        setPassword,
        setEmail,
        setUserName,
        login,
        user,
        logout,
        email,
        password,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
