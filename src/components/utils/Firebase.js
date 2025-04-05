// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4-29stGqxdVaSDk5rfMqKsVLM2INbqo4",
  authDomain: "vknetflixgpt-f8ac8.firebaseapp.com",
  projectId: "vknetflixgpt-f8ac8",
  storageBucket: "vknetflixgpt-f8ac8.firebasestorage.app",
  messagingSenderId: "933058415621",
  appId: "1:933058415621:web:30b00dd07eee7db4e4606c",
  measurementId: "G-GDRCKGKE78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const _analytics = getAnalytics(app);

export const auth = getAuth();