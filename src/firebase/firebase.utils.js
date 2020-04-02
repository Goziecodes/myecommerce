import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDUig5qEJ-wdcp-ngIbnZKo42GNQ-Eto1U",
        authDomain: "clothing-db-bbc3d.firebaseapp.com",
        databaseURL: "https://clothing-db-bbc3d.firebaseio.com",
        projectId: "clothing-db-bbc3d",
        storageBucket: "clothing-db-bbc3d.appspot.com",
        messagingSenderId: "28166265523",
        appId: "1:28166265523:web:e509c68e01aab04091eec6",
        measurementId: "G-F8LD0248ZV"
};

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;