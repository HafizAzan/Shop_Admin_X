import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBzAQXolEi7uEzUpE3MQniym4gUBCJ6ivc",
  authDomain: "e-commerce-portal-7d776.firebaseapp.com",
  projectId: "e-commerce-portal-7d776",
  storageBucket: "e-commerce-portal-7d776.firebasestorage.app",
  messagingSenderId: "413126145706",
  appId: "1:413126145706:web:4584288c7bbc5f204b82d3",
  measurementId: "G-GL36Y55TT9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(app);

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export { auth, db, googleProvider, ref, push, database };
