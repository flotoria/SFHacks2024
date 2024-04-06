// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHxLTQqMGzwaTqVGrB9fxkvLLp6wMiGxg",
  authDomain: "houseshare-10adb.firebaseapp.com",
  projectId: "houseshare-10adb",
  storageBucket: "houseshare-10adb.appspot.com",
  messagingSenderId: "1072950846394",
  appId: "1:1072950846394:web:07a1a5b7363342c8d8f383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };