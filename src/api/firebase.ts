// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD1Id7yZyqaEqB4n1-vkBwSFtpomGlMwTI",
  authDomain: "esclass-9787f.firebaseapp.com",
  projectId: "esclass-9787f",
  storageBucket: "esclass-9787f.appspot.com",
  messagingSenderId: "96216647718",
  appId: "1:96216647718:web:f3581235b0b8448d817ee7",
  measurementId: "G-VKS4M0Q78G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
