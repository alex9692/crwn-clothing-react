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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
