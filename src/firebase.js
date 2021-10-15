import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyBwECstANqjrD7TndaIyrUsxjAbcmeR8bI",
//   authDomain: "criptomet-38379.firebaseapp.com",
//   projectId: "criptomet-38379",
//   storageBucket: "criptomet-38379.appspot.com",
//   messagingSenderId: "784248541792",
//   appId: "1:784248541792:web:6614b1da5f1901c4bae905"
// });

var firebaseConfig = {
    apiKey: "AIzaSyBwECstANqjrD7TndaIyrUsxjAbcmeR8bI",
    authDomain: "criptomet-38379.firebaseapp.com",
    projectId: "criptomet-38379",
    storageBucket: "criptomet-38379.appspot.com",
    messagingSenderId: "784248541792",
    appId: "1:784248541792:web:6614b1da5f1901c4bae905"
};

const fb = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = fb.firestore();

// export default app;
