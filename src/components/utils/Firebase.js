// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-b9dc2.firebaseapp.com",
  projectId: "netflix-gpt-b9dc2",
  storageBucket: "netflix-gpt-b9dc2.firebasestorage.app",
  messagingSenderId: "916913507374",
  appId: "1:916913507374:web:cd286c551934d59e91e3bf",
  measurementId: "G-4C621PTNP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
