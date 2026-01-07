import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0jN17CC2KOC3U3Ai94dsj02zu1BUV8tE",
  authDomain: "sangdev-ca0ea.firebaseapp.com",
  projectId: "sangdev-ca0ea",
  storageBucket: "sangdev-ca0ea.firebasestorage.app",
  messagingSenderId: "4274498068",
  appId: "1:4274498068:web:0010eadda0aa8889555501"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
