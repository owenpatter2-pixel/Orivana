// FIREBASE IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBOladx2dEvDJ7_Zugc3jDwVmKM-C99fyI",
  authDomain: "orivana-f46ec.firebaseapp.com",
  projectId: "orivana-f46ec",
  storageBucket: "orivana-f46ec.firebasestorage.app",
  messagingSenderId: "570848196164",
  appId: "1:570848196164:web:694ca562befef3a4fb6e11",
  measurementId: "G-4MZ1WNKKMF"
};


// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


// INPUTS
const email = document.getElementById("email");

const password = document.getElementById("password");

const userBox = document.getElementById("user-box");


// SIGN UP
window.signup = async function () {

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

    alert("Account created");

  } catch (error) {

    alert(error.message);

  }

};


// LOGIN
window.login = async function () {

  try {

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

    alert("Login successful");

  } catch (error) {

    alert(error.message);

  }

};


// GOOGLE LOGIN
window.googleLogin = async function () {

  try {

    const result =
      await signInWithPopup(auth, provider);

    alert("Google login successful");

  } catch (error) {

    alert(error.message);

  }

};


// LOGOUT
window.logout = async function () {

  await signOut(auth);

  alert("Logged out");

};


// USER STATE
onAuthStateChanged(auth, (user) => {

  if (user) {

    userBox.innerHTML = `
      <img
        src="${user.photoURL || 'https://via.placeholder.com/100'}"
        width="80"
        style="border-radius:50%; margin-bottom:10px;"
      >

      <h3>${user.email}</h3>
    `;

  } else {

    userBox.innerHTML = "";

  }

});
window.fakeTransfer = function(){

  alert("Transfer Successful ✅");

}
