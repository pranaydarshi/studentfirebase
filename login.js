import { app } from "./firebase.js"
import { getDatabase, set, ref, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
const db = getDatabase();
const auth = getAuth()


let login = document.getElementById("login")
console.log(login)
login.addEventListener("click", (e) => {
    console.log("login clicked")
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            let dt = new Date();
            update(ref(db,"users/"+user.uid),{

                last_login : dt
            })
            alert("user loged in")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)

        })
})
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });