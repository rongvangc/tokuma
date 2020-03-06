import firebase from 'firebase';
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAhr83pdOeJWcYSHuyJXc2F6ayHwyGb3ew",
  authDomain: "tokuma-b8f4d.firebaseapp.com",
  databaseURL: "https://tokuma-b8f4d.firebaseio.com",
  projectId: "tokuma-b8f4d",
  storageBucket: "tokuma-b8f4d.appspot.com",
  messagingSenderId: "53696149497",
  appId: "1:53696149497:web:6e621da2c2d8f397b6af28"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

// firebase.analytics();

export  {
  storage, firebase as default
}