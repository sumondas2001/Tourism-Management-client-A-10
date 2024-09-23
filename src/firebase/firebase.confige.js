// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyAQbNLtrbzv9fWE3m7vTegqM3-1Q8vwCq4",
     authDomain: "ass-10-tourism-management.firebaseapp.com",
     projectId: "ass-10-tourism-management",
     storageBucket: "ass-10-tourism-management.appspot.com",
     messagingSenderId: "105743694498",
     appId: "1:105743694498:web:045da47e0bedfe131eb5fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;