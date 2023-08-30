// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtcPkL-lalmElF0_7oBU_aNoPJ3AGb4XA",
  authDomain: "for-og.firebaseapp.com",
  projectId: "for-og",
  storageBucket: "for-og.appspot.com",
  messagingSenderId: "747200218116",
  appId: "1:747200218116:web:7e323a32ca9c6f58fde151",
  measurementId: "G-FWQVMN3Q2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);