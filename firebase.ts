import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGubk7Mff8f0aEpxYQFv3MGvUwmOO9HKc",
  authDomain: "dowell-3a2e1.firebaseapp.com",
  databaseURL: "https://dowell-3a2e1-default-rtdb.firebaseio.com",
  projectId: "dowell-3a2e1",
  storageBucket: "dowell-3a2e1.appspot.com",
  messagingSenderId: "346406234726",
  appId: "1:346406234726:web:41406f6ccea20c53cedba7",
  measurementId: "G-YQHKPKJ5DR"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export { db, auth, googleProvider, githubProvider}
