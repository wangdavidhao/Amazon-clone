//npm install firebase
import firebase from "firebase";  

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAurECfjwP81PhO8sPKo9krJs0mbWdNU5g",
  authDomain: "clone-a35cc.firebaseapp.com",
  databaseURL: "https://clone-a35cc.firebaseio.com",
  projectId: "clone-a35cc",
  storageBucket: "clone-a35cc.appspot.com",
  messagingSenderId: "137499759276",
  appId: "1:137499759276:web:096db54b0fdda6423cc509",
  measurementId: "G-30QMMZRJ6S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };