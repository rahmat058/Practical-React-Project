import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDrHXcOy3dFHCwYgCPjjWRsKKzNvA8aMYQ",
  authDomain: "m-city123.firebaseapp.com",
  databaseURL: "https://m-city123.firebaseio.com",
  projectId: "m-city123",
  storageBucket: "m-city123.appspot.com",
  messagingSenderId: "972214388483",
  appId: "1:972214388483:web:0d9c49fbf64e9d245bcb36"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
}