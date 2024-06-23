// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBS4BXpaFFy3SIXHof1vIY5MVAvrE62tw",
  authDomain: "chatapp-b44d0.firebaseapp.com",
  projectId: "chatapp-b44d0",
  storageBucket: "chatapp-b44d0.appspot.com",
  messagingSenderId: "513464528913",
  appId: "1:513464528913:web:4160c455d43026065dc1b0",
  measurementId: "G-T857VJ4W54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()