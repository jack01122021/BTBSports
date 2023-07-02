
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/storage";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9R1e3HJapezx3Uu2zlCxznUbvcJhgocY",
  authDomain: "init-firebase-adsport.firebaseapp.com",
  projectId: "init-firebase-adsport",
  storageBucket: "init-firebase-adsport.appspot.com",
  messagingSenderId: "932920746900",
  appId: "1:932920746900:web:aee6933880e85b4358e581",
  measurementId: "G-FH6GEVDNN8",
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

}
const firestore = firebase.firestore();
const firestorage = firebase.storage();
const fireauth = firebase.auth();

export {firestore, firestorage, fireauth}