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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        // console.log(userRef);

        // const collectionRef = firestore.collection('users');
        // console.log(collectionRef);
        

        const snapShot = await userRef.get();
        // console.log(snapShot.data());

        // const collectionSnapshot = await collectionRef.get();
        // console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
        const collectionRef = firestore.collection(collectionKey);
        // console.log(collectionRef);

        const batch = firestore.batch();
        objectsToAdd.forEach(obj =>{
                const newDocRef = collectionRef.doc();
                // console.log(newDocRef);
                batch.set(newDocRef, obj);
        });

     return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(doc => {
                const {title, items} = doc.data();

                return {
                        routeName: encodeURI(title.toLocaleLowerCase()),
                        id: doc.id,
                        title,
                        items
                }
        });
        // console.log(transformedCollection); 
//        console.log(transformedCollection.reduce((accumulator, collection) => {
//                 accumulator[collection.title.toLowerCase()] = collection;
//                 return accumulator;
//         },{}) )

       return transformedCollection.reduce((accumulator, collection) => {
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator;
        },{})
}

export const getCurrentUser = () =>{
        return new Promise((resolve, reject) =>{
                const unsubscribe = auth.onAuthStateChanged(userAuth => {
                        unsubscribe();
                        resolve(userAuth);
                }, reject)
        });
}

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;