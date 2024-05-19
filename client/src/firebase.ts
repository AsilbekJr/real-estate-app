// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c5a86.firebaseapp.com",
  projectId: "mern-estate-c5a86",
  storageBucket: "mern-estate-c5a86",
  messagingSenderId: "653442732304",
  appId: "1:653442732304:web:4acdd9ad2ed83848c2d595",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
