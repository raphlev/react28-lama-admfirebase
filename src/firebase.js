import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lamareactfirebase.firebaseapp.com",
  projectId: "lamareactfirebase",
  storageBucket: "lamareactfirebase.appspot.com",
  messagingSenderId: "41863832370",
  appId: "1:41863832370:web:82c9a49e04fcaa27d86d2b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
