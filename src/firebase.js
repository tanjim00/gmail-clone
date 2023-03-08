import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4F_xOiRKs_uS66ZFaVNXuJgmIvBmIj6s",
    authDomain: "clone-8a69c.firebaseapp.com",
    projectId: "clone-8a69c",
    storageBucket: "clone-8a69c.appspot.com",
    messagingSenderId: "272629546366",
    appId: "1:272629546366:web:965786f2b156655ab0872f",
    measurementId: "G-YF6JEXQBRK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export const serverStamp = firebase.firestore.Timestamp;

export default firebase;
