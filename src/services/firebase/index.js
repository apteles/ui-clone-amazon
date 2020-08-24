import firebase from "firebase";

const firebaseConfig = {
  apiKey: "your-key",
  authDomain: "your-domain",
  databaseURL: "your url",
  projectId: "your project id",
  storageBucket: "your bucket",
  messagingSenderId: "messaging id",
  appId: "your app id",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
