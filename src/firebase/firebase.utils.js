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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();
        // console.log(snapShot);

        if(!snapShot.exists){
                const {displayName, email} = userAuth;
                const createdAt = new Date();

        try {
                await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
                })
        } catch (error){
                console.log('error creating user', error.message);
        }
        }

        return userRef;
         
        // console.log(firestore.doc('users/ABCDEFGHIJ'));
};

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;