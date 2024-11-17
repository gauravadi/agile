// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYG0cQStXogsdur3XbQXB_bml6Zswcq8s",
  authDomain: "mern-book-inventory-23fd5.firebaseapp.com",
  projectId: "mern-book-inventory-23fd5",
  storageBucket: "mern-book-inventory-23fd5.firebasestorage.app",
  messagingSenderId: "689877492559",
  appId: "1:689877492559:web:64e09a9b74f01f38f09b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;