// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider }from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBtRtvhQQhh14NLqE7_DOeTRkkkk94ImDs",
  authDomain: "chatapp-3097a.firebaseapp.com",
  projectId: "chatapp-3097a",
  storageBucket: "chatapp-3097a.appspot.com",
  messagingSenderId: "781771743991",
  appId: "1:781771743991:web:b0cdaab24da40c715829f2",
  measurementId: "G-7S5VXRM99D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);