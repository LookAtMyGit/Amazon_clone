import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export default app;
