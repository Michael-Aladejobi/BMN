// --------------------------------------------------------------------------------------------------------------------------------
//Sign Up | Register (START)
// --------------------------------------------------------------------------------------------------------------------------------

// Firebase auth DB
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAho3RaSMQyi6es_U_AvDsVsnG_Z9A-iy4",
    authDomain: "beyond-music-network.firebaseapp.com",
    projectId: "beyond-music-network",
    storageBucket: "beyond-music-network.appspot.com",
    messagingSenderId: "413847522878",
    appId: "1:413847522878:web:16fd3ca902a99d818b4b6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for creating a new account btn
document
    .getElementById("submit-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        alert("Creating Account. Please wait...");
        // Get inputs
        const email = document.getElementById("email-el").value;
        const password = document.getElementById("password-el").value;

        // Create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                alert("Account Created Successfully!");
                window.location.href = "login.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    });
// --------------------------------------------------------------------------------------------------------------------------------
//Sign Up | Register (END)
// --------------------------------------------------------------------------------------------------------------------------------
