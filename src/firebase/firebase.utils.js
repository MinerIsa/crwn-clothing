import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDiHkP0q2I1f7hrbb6Vf_OO5GWX3ifXYjY",
  authDomain: "crwn-db-70a8c.firebaseapp.com",
  projectId: "crwn-db-70a8c",
  storageBucket: "crwn-db-70a8c.appspot.com",
  messagingSenderId: "1019782539817",
  appId: "1:1019782539817:web:ea029306e83506a3d40a38",
  measurementId: "G-68QQ207W18"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;