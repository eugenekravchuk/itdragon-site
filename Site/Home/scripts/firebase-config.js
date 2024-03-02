import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    get,
    child,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB7TVsYHt0xsOgWQYfjwL53uAcKqqTjk_0",
    authDomain: "it-dragon-website.firebaseapp.com",
    databaseURL:
        "https://it-dragon-website-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "it-dragon-website",
    storageBucket: "it-dragon-website.appspot.com",
    messagingSenderId: "568114275893",
    appId: "1:568114275893:web:cf48613e270ef52999337c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database services
const db = getDatabase(app);
document.getElementById("submit").addEventListener("click", function (e) {
    set(ref(db, "user/" + document.getElementById("name_consultation").value), {
        username: document.getElementById("name_consultation").value,
        email: document.getElementById("email_consultation").value,
        phone: document.getElementById("phone_consultation").value,
    });
    alert("Login Sucessfull !");
});
