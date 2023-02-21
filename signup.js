import { app } from "./firebase.js"
import { getDatabase, set, ref, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
const db = getDatabase();
const auth = getAuth()

let signup = document.getElementById("signup")
signup.addEventListener("click", (e) => {
    console.log("Signup clicked")
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(db, "users/" + user.uid),{ username, email}).then((res) => {
                console.log("created")


                document.getElementById("login").innerHTML = `
                <a href="login.html">Click Here To Log In</a>
                `
               

            })
            alert("User Created")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
})

// let login = document.getElementById("login")
// login.addEventListener("click", (e) => {
//     console.log("login clicked")
//     let email = document.getElementById("email").value
//     let password = document.getElementById("password").value
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             // ...
//             let dt = new Date();
//             update(ref(db,"users/"+user.uid),{

//                 last_login : dt
//             })
//             alert("user loged in")
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage)

//         })
// })

