// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as admin from 'firebase-admin';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAOU5yNBQa-gnJTSSJdaODgIS5sA-VOlk",
  authDomain: "xenoread.firebaseapp.com",
  projectId: "xenoread",
  storageBucket: "xenoread.appspot.com",
  messagingSenderId: "806413603898",
  appId: "1:806413603898:web:55f4c2d80af29c55145103",
  measurementId: "G-DS5Z92HH06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default firebaseConfig;
export { app };
