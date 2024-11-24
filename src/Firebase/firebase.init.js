// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZUZM1lVtkv1_tKZuYL41ubM6VYN8mZ9M",
    authDomain: "hard-firebase-7a393.firebaseapp.com",
    projectId: "hard-firebase-7a393",
    storageBucket: "hard-firebase-7a393.firebasestorage.app",
    messagingSenderId: "698217415634",
    appId: "1:698217415634:web:52618a2e12fcacba607e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);