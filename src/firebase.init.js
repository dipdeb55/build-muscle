// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlFIEQxSV0Rf02ylZ7Zh5Da-58QE9SmFo",
    authDomain: "assignment-10-8761e.firebaseapp.com",
    projectId: "assignment-10-8761e",
    storageBucket: "assignment-10-8761e.appspot.com",
    messagingSenderId: "718850370334",
    appId: "1:718850370334:web:7f75c0b2a4c4af4436770f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;