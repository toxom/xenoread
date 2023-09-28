import {initializeApp} from "firebase/app";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Initialize Firebase Admin (if not already initialized)
admin.initializeApp();

// Initialize Firebase (if not already initialized)
const firebaseConfig = {
  // Your Firebase config here
};
initializeApp(firebaseConfig);

// Cloud Function to create user documents
export const createUserDocument = functions.auth.user().onCreate((user) => {
  console.log("Triggered user creation with user:", user);  // Logging user data

  const db = admin.firestore();
  const userRef = db.collection("users").doc(user.uid);

  // Set initial data for the user
  return userRef.set({
    displayName: user.displayName || "",
    email: user.email,
    aboutMe: "",
    city: "",
    country: "",
    displayLanguage: [], // You can populate this based on user preferences
  }).then(() => {
    console.log("Document successfully written!");  // Logging on successful operation
  }).catch((error) => {
    console.error("Error writing document: ", error);  // Logging errors
  });
});

// Export the function
export {};
