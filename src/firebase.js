import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDXRJ0KtyOxUyNQx2D513Q-uhwe_dHFs5k",
    authDomain: "crts-637d6.firebaseapp.com",
    projectId: "crts-637d6",
    storageBucket: "crts-637d6.appspot.com",
    messagingSenderId: "564290356611",
    appId: "1:564290356611:web:ef1ae6e63f33c34f9ee2b6",
    measurementId: "G-3S9ZTDQPR0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;