import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAnzw5W5ES2DMhWeW_qc1DMfNNlrTRDZHc',
  authDomain: 'ecommerce-react-lali.firebaseapp.com',
  projectId: 'ecommerce-react-lali',
  storageBucket: 'ecommerce-react-lali.appspot.com',
  messagingSenderId: '742359956483',
  appId: '1:742359956483:web:7637d3601e39ca6edae236',
  measurementId: 'G-PQZNRF35W4',
};

export const createUserProfileDoc = async (user, data) => {
  if (!user) return;
  const userRef = await firestore.doc(`user/${user.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const created = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        created,
        ...data,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title?.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unSuscribe = auth.onAuthStateChanged((userAuth) => {
      unSuscribe();
      res(userAuth);
    }, rej);
  });
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
