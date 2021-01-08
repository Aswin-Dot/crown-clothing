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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;