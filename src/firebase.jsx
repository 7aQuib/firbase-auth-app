import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCu3r0kQihLfZrRB1e2EfgMB9SQNrgOTgo",
    authDomain: "authentication-app-fb173.firebaseapp.com",
    projectId: "authentication-app-fb173",
    storageBucket: "authentication-app-fb173.appspot.com",
    messagingSenderId: "428590531780",
    appId: "1:428590531780:web:ad11eb0fd28d9b85d13591",
    measurementId: "G-6EZDQVWBY7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth};