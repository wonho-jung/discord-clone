import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSyZSY-zYEyNQgEuS8crXYGxlTC1qvLoc",
  authDomain: "discord-clone-eb389.firebaseapp.com",
  databaseURL: "https://discord-clone-eb389.firebaseio.com",
  projectId: "discord-clone-eb389",
  storageBucket: "discord-clone-eb389.appspot.com",
  messagingSenderId: "508070723740",
  appId: "1:508070723740:web:bff67f3d6c9961e6392d59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
