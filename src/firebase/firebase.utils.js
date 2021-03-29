import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCtFcJ_ZLmbPWNfC6Mt0dWpz7SkWdZaRVQ',
  authDomain: 'crwn-db-64328.firebaseapp.com',
  projectId: 'crwn-db-64328',
  storageBucket: 'crwn-db-64328.appspot.com',
  messagingSenderId: '1028862002506',
  appId: '1:1028862002506:web:fe9e28df1a87f120b1edb3',
  measurementId: 'G-EVRE8SLL4E',
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additonalData,
      });
    } catch (error) {
      console.log('error create user: ', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
