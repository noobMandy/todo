// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCbpBDja3fxLw57fRsJ5jnpFmvEBw-uXf4",
  authDomain: "todo-82d69.firebaseapp.com",
  projectId: "todo-82d69",
  storageBucket: "todo-82d69.appspot.com",
  messagingSenderId: "845038830461",
  appId: "1:845038830461:web:bf5253415c0a4e3e0c0214",
  measurementId: "G-Q8SBEQMN15",
});
const db = firebaseApp.firestore();
export default db;
