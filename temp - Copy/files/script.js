import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8uN4EKmTCO0dTpF5BShnijDnlCes0LdY",
  authDomain: "portfolio-alan-roy.firebaseapp.com",
  databaseURL: "https://portfolio-alan-roy-default-rtdb.firebaseio.com",
  projectId: "portfolio-alan-roy",
  storageBucket: "portfolio-alan-roy.appspot.com",
  messagingSenderId: "660210667185",
  appId: "1:660210667185:web:174ad66c6add8bd7e21c90",
  measurementId: "G-7GBMBJ4QB6",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Add an event listener to the sign-up button
// Function to display a success message popup
function displaySuccessMessage(message) {
  alert(message);
}

// Function to display an error message popup

// Event listener for s
// Function to display error message
function displayErrorMessage(message) {
  const errorMessage = document.getElementById("error-message");
  alert("Error: " + message);
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

// Function to display success message

// Sign up button event listener
document.getElementById("signup-button").addEventListener("click", () => {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Check if password meets minimum length requirement
  if (password.length < 6) {
    displayErrorMessage("Password must be at least 6 characters long.");
    return; // Exit function early if password is too short
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      updateProfile(user, { displayName: username })
        .then(() => {
          displaySuccessMessage("Sign up successful. Welcome, " + email + "!");
        })
        .catch((error) => {
          displayErrorMessage("Error updating profile: " + error.message);
        });
    })
    .catch((error) => {
      displayErrorMessage("Sign up error: " + error.message);
    });
});

// Sign in button event listener
document.getElementById("signin-button").addEventListener("click", () => {
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed in successfully as", user.email);
      // Hide sign in form and show logout button
      document.getElementById("signin-form").style.display = "none";
      document.getElementById("logout-button").style.display = "block";
    })
    .catch((error) => {
      displayErrorMessage("Sign in error: " + error.message);
    });
});

// Logout button event listener
document.getElementById("logout-button").addEventListener("click", () => {
  auth
    .signOut()
    .then(() => {
      console.log("Signed out successfully.");
      // Hide logout button and show sign in form
      document.getElementById("signin-form").style.display = "block";
      document.getElementById("logout-button").style.display = "none";
    })
    .catch((error) => {
      displayErrorMessage("Logout error: " + error.message);
    });
});
