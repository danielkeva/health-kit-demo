// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/database';

const { REACT_APP_DATABASE_URL, REACT_APP_FIREBASE_APP_ID, REACT_APP_FIREBASE_KEY } = process.env;
var firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_KEY,
    authDomain: 'healthkit-24cf4.firebaseapp.com',
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: 'healthkit-24cf4',
    storageBucket: 'healthkit-24cf4.appspot.com',
    messagingSenderId: '569804396658',
    appId: REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
