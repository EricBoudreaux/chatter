import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB3hgzh_6OmE-oqqk9nke-IascJQ7IPuhc",
    authDomain: "chatter-53eba.firebaseapp.com",
    projectId: "chatter-53eba",
    storageBucket: "chatter-53eba.appspot.com",
    messagingSenderId: "966912789893",
    appId: "1:966912789893:web:e4aec54332d864855348ec",
    measurementId: "G-C1SR786KGD"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }