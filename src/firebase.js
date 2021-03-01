import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSR6Zf8wSlRuaB3Ia1BvCi-pHIjnkObuY",
    authDomain: "facebook-clone-72941.firebaseapp.com",
    databaseURL: "https://facebook-clone-72941.firebaseio.com",
    projectId: "facebook-clone-72941",
    storageBucket: "facebook-clone-72941.appspot.com",
    messagingSenderId: "371563053188",
    appId: "1:371563053188:web:c9a8da7fead1315d8642d1",
    measurementId: "G-7QHKJQS6EN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;