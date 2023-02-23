import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB0Rth2DSMT3zMnQvZ1cSU-GIlZ23_1ulM",
    authDomain: "mychat-dc7a6.firebaseapp.com",
    projectId: "mychat-dc7a6",
    storageBucket: "mychat-dc7a6.appspot.com",
    messagingSenderId: "1031177044848",
    appId: "1:1031177044848:web:75dcc595e9e0dbfb0cc5b5"
  }).auth();