// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2q8QMTjo7dzi-w4a-ZaPhWsInLwGiRE4",
  authDomain: "undangan-randa-rini.firebaseapp.com",
  projectId: "undangan-randa-rini",
  storageBucket: "undangan-randa-rini.firebasestorage.app",
  messagingSenderId: "585150468774",
  appId: "1:585150468774:web:05d9ae182759fac9fa1a67",
  measurementId: "G-MC1GMSZ29X",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
