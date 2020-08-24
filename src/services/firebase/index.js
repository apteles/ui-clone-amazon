import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAP_6I6bAlFfCX6e6A1LxlB35gnurc5ZKk",
  authDomain: "clone-719f3.firebaseapp.com",
  databaseURL: "https://clone-719f3.firebaseio.com",
  projectId: "clone-719f3",
  storageBucket: "clone-719f3.appspot.com",
  messagingSenderId: "274703371334",
  appId: "1:274703371334:web:8bd701ee10f13a2aaa8e47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
