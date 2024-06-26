// Firebase auth DB
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// My web app's Firebase configuration
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

document

    .getElementById("submit-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        alert("Checking Details...\nPlease Wait!");
        // Get inputs
        const email = document.getElementById("email-el").value;
        const password = document.getElementById("password-el").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert("Login Sucessful!");
                // ...
                window.location.href = "home.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    });

const reset = document.getElementById("forget-password");
reset.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email-el").value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..

            alert("Password Reset Link Sent To Your Email! \n BMN Team!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("Please enter your email.");
            alert(errorMessage);
        });
});
