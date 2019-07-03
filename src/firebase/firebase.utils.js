import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
apiKey: "AIzaSyCdR44R4k05wJ_2fzmo8-OQ4i30goSMlNA",
    authDomain: "athletes-clothing.firebaseapp.com",
    databaseURL: "https://athletes-clothing.firebaseio.com",
    projectId: "athletes-clothing",
    storageBucket: "",
    messagingSenderId: "726680625436",
    appId: "1:726680625436:web:fbda84143fa96f46"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;