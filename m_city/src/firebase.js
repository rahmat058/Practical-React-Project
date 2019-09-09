import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDrHXcOy3dFHCwYgCPjjWRsKKzNvA8aMYQ",
  authDomain: "m-city123.firebaseapp.com",
  databaseURL: "https://m-city123.firebaseio.com",
  projectId: "m-city123",
  storageBucket: "",
  messagingSenderId: "972214388483",
  appId: "1:972214388483:web:0d9c49fbf64e9d245bcb36"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
  firebase,
  firebaseMatches,
  firebasePromotions
}