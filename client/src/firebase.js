// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "project-1-e7f39.firebaseapp.com",
  projectId: "project-1-e7f39",
  storageBucket: "project-1-e7f39.appspot.com",
  messagingSenderId: "234401976665",
  appId: "1:234401976665:web:b22082a1082ff324befc48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

