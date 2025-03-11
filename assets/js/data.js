// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref , set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";


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
const db=getDatabase(app)
document.getElementById("booked").addEventListener("click",function (event) {
  event.preventDefault()
  set(ref( db, "tablebooked/" + document.getElementById("name").value),
  {
    
    number:document.getElementById("Number").value,
    email:document.getElementById("email").value,
    persons:document.getElementById("persons").value,
    date:document.getElementById("date").value
  })
  alert("YOUR TABLE IS BOOKED! THANKS")
  
})