// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwnUlKWt-yxXrcg7cH3rhd4N_E32GrQ5o",
  authDomain: "day-01-299a2.firebaseapp.com",
  projectId: "day-01-299a2",
  storageBucket: "day-01-299a2.firebasestorage.app",
  messagingSenderId: "992691420942",
  appId: "1:992691420942:web:86fa131314d7fcd494615f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;