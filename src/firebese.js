import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbpeVcu0Upsrn7x6-APhbl7qkX-c5MUjU",
  authDomain: "clone-48cfb.firebaseapp.com",
  projectId: "clone-48cfb",
  storageBucket: "clone-48cfb.appspot.com",
  messagingSenderId: "720208868260",
  appId: "1:720208868260:web:94f2221a12d11c8c31c731",
  measurementId: "G-XL1J00WERV",
});

// const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
