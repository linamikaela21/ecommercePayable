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

export const createUserProfileDoc = async (userAuth, data) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const created = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        created,
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
    return userRef;
  }
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
