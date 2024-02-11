import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPUxAxRHuyyhk6mNW80rWB7MELBicX8gw",
    authDomain: "tasty-beer-club.firebaseapp.com",
    projectId: "tasty-beer-club",
    storageBucket: "tasty-beer-club.appspot.com",
    messagingSenderId: "538924177727",
    appId: "1:538924177727:web:4d0434b9a373186ededb8a",
    measurementId: "G-EPQDKPCM1C"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
export const db = getFirestore(app)