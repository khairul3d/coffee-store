// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9Pm7qz-Hv2AYrZGGj7L8t93CAD1bj2g",
  authDomain: "coffee-store-9ab5b.firebaseapp.com",
  projectId: "coffee-store-9ab5b",
  storageBucket: "coffee-store-9ab5b.appspot.com",
  messagingSenderId: "790230409051",
  appId: "1:790230409051:web:d4965888690f5817ac047e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;