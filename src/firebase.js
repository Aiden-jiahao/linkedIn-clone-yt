import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDJD-aAGj55eFhEqWZ3rhVuC99bOX3dAqY",
  authDomain: "linkedin-clone-yt-ebab6.firebaseapp.com",
  projectId: "linkedin-clone-yt-ebab6",
  storageBucket: "linkedin-clone-yt-ebab6.appspot.com",
  messagingSenderId: "62917991772",
  appId: "1:62917991772:web:8987fdd079ad8610203599",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
/* in this db , we have access to our variables*/

const auth = firebase.auth();

export { db, auth };
