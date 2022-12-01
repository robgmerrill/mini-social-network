import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_nQbXDmtLIzXuFFqmBcCUS2A1KPCWSnE",
  authDomain: "micro-social-blog-efc77.firebaseapp.com",
  projectId: "micro-social-blog-efc77",
  storageBucket: "micro-social-blog-efc77.appspot.com",
  messagingSenderId: "798027662692",
  appId: "1:798027662692:web:4f89f7c6ba2f9f5a896671",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// work with auth
export const auth = firebase.auth();
// work with firestore
export const firestore = firebase.firestore();
// work with storage
export const storage = firebase.storage();
