// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwvuriw74achqgIKJLUAjWsanHumMo7-M",
    authDomain: "netflixgpt-704b4.firebaseapp.com",
    projectId: "netflixgpt-704b4",
    storageBucket: "netflixgpt-704b4.firebasestorage.app",
    messagingSenderId: "863746394512",
    appId: "1:863746394512:web:cd47f586e246dd93a54b15",
    measurementId: "G-NXQ1REF05V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();