import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwvuriw74achqgIKJLUAjWsanHumMo7-M",
    authDomain: "netflixgpt-704b4.firebaseapp.com",
    projectId: "netflixgpt-704b4",
    storageBucket: "netflixgpt-704b4.firebasestorage.app",
    messagingSenderId: "863746394512",
    appId: "1:863746394512:web:cd47f586e246dd93a54b15",
    measurementId: "G-NXQ1REF05V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();