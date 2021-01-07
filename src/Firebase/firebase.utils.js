import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6dtgdpO7bW2eFKM8JWhKtKHeKstyL18o",
  authDomain: "crown-clothing-4625b.firebaseapp.com",
  projectId: "crown-clothing-4625b",
  storageBucket: "crown-clothing-4625b.appspot.com",
  messagingSenderId: "12285460109",
  appId: "1:12285460109:web:be1f95dbcb0f435e6aecc4",
  measurementId: "G-6B6457E379"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;