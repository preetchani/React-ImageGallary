import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAn3yeLr1G6UVvRIDjqkfcSaEhr7y59Q2w",
    authDomain: "react-firegram-bf620.firebaseapp.com",
    projectId: "react-firegram-bf620",
    storageBucket: "react-firegram-bf620.appspot.com",
    messagingSenderId: "215177272230",
    appId: "1:215177272230:web:6bba44d67bcdcdc5950d67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStorage = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFireStorage,timeStamp};