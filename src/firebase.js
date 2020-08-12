import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCcM3aD4iSOSOJkZnm4pTMH4qrtHOUY0Js",
  authDomain: "clone-abad2.firebaseapp.com",
  databaseURL: "https://clone-abad2.firebaseio.com",
  projectId: "clone-abad2",
  storageBucket: "clone-abad2.appspot.com",
  messagingSenderId: "1023484693209",
  appId: "1:1023484693209:web:64ed5c538811703f9f0cc8",
  measurementId: "G-9VG9H7CEWB",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
