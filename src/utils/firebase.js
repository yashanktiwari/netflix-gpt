// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2nClnCJCtjkquV85ELyFSguGFOzXw8YY",
  authDomain: "netflixgpt-da44b.firebaseapp.com",
  projectId: "netflixgpt-da44b",
  storageBucket: "netflixgpt-da44b.appspot.com",
  messagingSenderId: "44865551408",
  appId: "1:44865551408:web:95602661b16e0780ac41f5",
  measurementId: "G-626QKWTVRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
