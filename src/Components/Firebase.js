import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "restimator-14945.firebaseapp.com",
  projectId: "restimator-14945",
  storageBucket: "restimator-14945.appspot.com",
  messagingSenderId: "1031788838344",
  appId: "1:1031788838344:web:8c90b0bf8962d1d2cf54fd"
};


export const app = initializeApp(firebaseConfig);