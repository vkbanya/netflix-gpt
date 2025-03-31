// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0tFp-TnSHkx2Vaejt_bmcbooBUIKXpDc",
  authDomain: "netflixgpt-cf942.firebaseapp.com",
  projectId: "netflixgpt-cf942",
  storageBucket: "netflixgpt-cf942.firebasestorage.app",
  messagingSenderId: "637098206746",
  appId: "1:637098206746:web:55e5b657c76943422b53a3",
  measurementId: "G-WF838FDMF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);