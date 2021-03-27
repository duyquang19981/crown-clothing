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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
