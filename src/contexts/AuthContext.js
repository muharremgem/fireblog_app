import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../helpers/firebase";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //useState
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // userInfo
  const [userInfo, setUserInfo] = useState(null);

  // Custom Func

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
      signInWithEmailAndPassword(auth, email, password).then((res) =>
        setUserInfo(res.user)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    try {
      signOut(auth);
      setUserInfo();
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
        userInfo,
        logout,
        email,
        password,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
