// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAooGCmnse_pRSU5wcP05gd5yTJV_4LB6s",
  authDomain: "authentication-e661a.firebaseapp.com",
  projectId: "authentication-e661a",
  storageBucket: "authentication-e661a.firebasestorage.app",
  messagingSenderId: "28993630022",
  appId: "1:28993630022:web:86c48fe98b601d12517f47",
  measurementId: "G-WMJF6ZH3Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const button = document.getElementById("submit");
button.addEventListener("click", function (event) {
  event.preventDefault()
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password,username)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("signup success")
      window.location.href = "login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
})