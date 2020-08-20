import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyADFAmTvk4lI7KjS0xf6GE53cwT4Cz90LI",
  authDomain: "crwn-clothing-6f7bb.firebaseapp.com",
  databaseURL: "https://crwn-clothing-6f7bb.firebaseio.com",
  projectId: "crwn-clothing-6f7bb",
  storageBucket: "crwn-clothing-6f7bb.appspot.com",
  messagingSenderId: "798212577673",
  appId: "1:798212577673:web:9b50354a01e4450f102958",
  measurementId: "G-YJ7J2VMD4Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
