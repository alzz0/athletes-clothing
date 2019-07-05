import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdR44R4k05wJ_2fzmo8-OQ4i30goSMlNA",
  authDomain: "athletes-clothing.firebaseapp.com",
  databaseURL: "https://athletes-clothing.firebaseio.com",
  projectId: "athletes-clothing",
  storageBucket: "",
  messagingSenderId: "726680625436",
  appId: "1:726680625436:web:fbda84143fa96f46"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/ ${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error, "error creating user");
    }
  }
    return userRef
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
