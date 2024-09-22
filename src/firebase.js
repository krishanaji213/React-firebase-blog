import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGz8pRrLVmN_UwJvwal5HE7-q2F88sjCo",
  authDomain: "blog-app-6d5a3.firebaseapp.com",
  projectId: "blog-app-6d5a3",
  storageBucket: "blog-app-6d5a3.appspot.com",
  messagingSenderId: "542557904150",
  appId: "1:542557904150:web:f738e89fee5831e5bd4437"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
