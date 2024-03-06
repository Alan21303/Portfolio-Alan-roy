import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function submitComment() {
  const commentText = document.getElementById("comment").value;
  const rating = parseInt(
    document.querySelector('input[name="rating"]:checked').id.substr(2)
  ); // Extract rating from the checked radio button's id and convert it to a number

  const commentsRef = firebase.database().ref("comments"); // Reference to comments collection in Firebase database

  // Push comment and rating to Firebase
  commentsRef
    .push({
      comment: commentText,
      rating: rating,
    })
    .then(() => {
      // Clear comment textarea
      document.getElementById("comment").value = "";

      // Display success message
      console.log("Comment submitted successfully!");
    })
    .catch((error) => {
      // Handle errors
      console.error("Error submitting comment:", error);
    });
}
