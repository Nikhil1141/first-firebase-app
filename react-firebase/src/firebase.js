import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDyNwFmRunqdkhIdNYZ7P0N43Lwg7OERwc",
    authDomain: "first-e5872.firebaseapp.com",
    projectId: "first-e5872",
    storageBucket: "first-e5872.firebasestorage.app",
    messagingSenderId: "302402672442",
    appId: "1:302402672442:web:fcd27026d88ea784f02203",
    databaseURL: 'https://first-e5872-default-rtdb.firebaseio.com'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);