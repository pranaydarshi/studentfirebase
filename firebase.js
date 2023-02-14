  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA858h2De4Lt958xN-XlyjzICIVMunIS0c",
    authDomain: "students-37efa.firebaseapp.com",
    databaseURL: "https://students-37efa-default-rtdb.firebaseio.com",
    projectId: "students-37efa",
    storageBucket: "students-37efa.appspot.com",
    messagingSenderId: "972875121523",
    appId: "1:972875121523:web:2e0fb0ec2bfdf6c81e7b06"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
