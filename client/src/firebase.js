// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2a18b.firebaseapp.com",
  projectId: "mern-estate-2a18b",
  storageBucket: "mern-estate-2a18b.appspot.com",
  messagingSenderId: "1015119541093",
  appId: "1:1015119541093:web:d5fe52729412ce99e1e78c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);