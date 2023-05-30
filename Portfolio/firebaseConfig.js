// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC55RyfDF6jEneSZfMlCQxld5xkRSSjf3k",
  authDomain: "portfolio-7fbe8.firebaseapp.com",
  projectId: "portfolio-7fbe8",
  storageBucket: "portfolio-7fbe8.appspot.com",
  messagingSenderId: "4147959256",
  appId: "1:4147959256:web:7eca1d5fd27e129f2dcead",
  measurementId: "G-TPJP5ERH18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
