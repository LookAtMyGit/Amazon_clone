import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnDBXrb7s9isTmu_kqajskgr-AWbPmmS8",
  authDomain: "e-clone-2373c.firebaseapp.com",
  projectId: "e-clone-2373c",
  storageBucket: "e-clone-2373c.appspot.com",
  messagingSenderId: "1067984251787",
  appId: "1:1067984251787:web:cf9bd24648cf2d4c705d8e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
//custom react hook

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
};
