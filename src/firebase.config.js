// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpZjbCVzNcHRVTj7a1BGXPuuHVejfmEg8",
  authDomain: "food-delivery-ec35f.firebaseapp.com",
  databaseURL: "https://food-delivery-ec35f-default-rtdb.firebaseio.com",
  projectId: "food-delivery-ec35f",
  storageBucket: "food-delivery-ec35f.appspot.com",
  messagingSenderId: "626008589697",
  appId: "1:626008589697:web:57ef2b8f7f6b26351e1480",
  measurementId: "G-R7BY5JN9GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export {app, storage, firestore}