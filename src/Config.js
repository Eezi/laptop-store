import firebase from 'firebase/app';
import 'firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAcD1RuKCxPNAPRefJU6sGNBIR3QZ0BUZo",
    authDomain: "laptopstore-7e8ed.firebaseapp.com",
    databaseURL: "https://laptopstore-7e8ed.firebaseio.com",
    projectId: "laptopstore-7e8ed",
    storageBucket: "laptopstore-7e8ed.appspot.com",
    messagingSenderId: "1072585965539",
    appId: "1:1072585965539:web:8ac3c4c965e09c5cfd6ad6",
    measurementId: "G-7GS91LEN3B"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;