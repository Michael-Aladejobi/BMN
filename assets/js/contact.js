// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

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
const db = getFirestore(app);

// Reference to the form element
const contactUs = document.getElementById("contactUs");

// Add a submit event listener to the form
contactUs.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const yourName = document.getElementById("yourname-el").value;
    const email = document.getElementById("email-el").value;
    const phone = document.getElementById("phone-el").value;
    const messageTitle = document.getElementById("messageTitle-el").value;
    const messageBody = document.getElementById("messageBody-el").value;

    try {
        // Add a new document with the form data to the "patients" collection
        const docRef = await addDoc(
            collection(db, "Contact Us Form Submissions"),
            {
                fullname: yourName,
                email: email,
                phoneNumber: phone,
                messageTitle: messageTitle,
                messageBody: messageBody,
            }
        );

        alert("Processing..."); // Display a processing message
        alert("Message sent Successfully!"); // Display success message

        // Clear the form
        contactUs.reset();

        // Redirect to Home page
        window.location.href = "home.html";
    } catch (e) {
        console.error("Error sending message: ", e); // Log error to console
        alert("Error sending message: " + e); // Display error message
    }
});
