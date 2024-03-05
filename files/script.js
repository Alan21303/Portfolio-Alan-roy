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
firebase.initializeApp(firebaseConfig);

const commentsRef = firebase.database().ref("comments");

function submitComment() {
  const commentText = document.getElementById("comment").value;
  const rating = document
    .querySelector(".star.active")
    .getAttribute("data-rating");

  commentsRef.push({
    comment: commentText,
    rating: rating,
  });

  document.getElementById("comment").value = "";
  document
    .querySelectorAll(".star")
    .forEach((star) => star.classList.remove("active"));
}

function loadComments() {
  commentsRef.on("value", (snapshot) => {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";
    snapshot.forEach((childSnapshot) => {
      const commentData = childSnapshot.val();
      const li = document.createElement("li");
      li.innerHTML = `<strong>Rating: ${commentData.rating}</strong><br>${commentData.comment}`;
      commentsList.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", loadComments);

document.querySelectorAll(".star").forEach((star) => {
  star.addEventListener("click", () => {
    document
      .querySelectorAll(".star")
      .forEach((s) => s.classList.remove("active"));
    star.classList.add("active");
  });
});
