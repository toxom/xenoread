import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile, signOut } from 'firebase/auth';
import {
  getFirestore,
  doc,
  onSnapshot,
  updateDoc,
  DocumentSnapshot,
  // Add other types/functions you need here
} from 'firebase/firestore'; // Import Firestore functions and types
import '../styles/Settings.scss';
import ButtonRow from '../components/Buttons/ButtonRow';

const ProfileSet: React.FC = () => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    country: '',
    language: '',
    city: '',
    aboutMe: '',
    notifications: true,
    displayLanguage: 'English',
  });

  const auth = getAuth();
  const db = getFirestore();
  

  useEffect(() => {
    // Fetch user data from Firebase Firestore
    const userId = auth.currentUser?.uid;
    if (userId) {
      const userDocRef = doc(db, 'users', userId);
      // Listen for changes to the user document
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          // Update the user state with the retrieved data
          setUser((prevUser) => ({ ...prevUser, ...userData }));
        }
      });

      return () => unsubscribe(); // Cleanup the listener when component unmounts
    }
  }, [auth, db]);

  const handleSave = () => {
    // Save user data to Firebase Firestore
    const userId = auth.currentUser?.uid;
    if (userId) {
      const userDocRef = doc(db, 'users', userId);
      const newData = {
        displayName: user.displayName,
        email: user.email,
        country: user.country,
        language: user.language,
        city: user.city,
        aboutMe: user.aboutMe,
        notifications: user.notifications,
        displayLanguage: user.displayLanguage,
      };
      // Update the user document with the new data
      updateDoc(userDocRef, newData);
    }
  };

  const handleLogout = () => {
    // Handle user logout
    signOut(auth);
  };

  return (
    <div className="Page-container">
      <div className="Settings-container">
        <p>My info</p>

        <ButtonRow label="Name">
          <div className="displayName">{user.displayName}</div>
        </ButtonRow>

        <ButtonRow label="Email">
          <div className="email">{user.email}</div>
        </ButtonRow>

        <ButtonRow label="I speak">
          <div className="language">{user.language}</div>
        </ButtonRow>

        <ButtonRow label="Country">
          <div className="country">{user.country}</div>
        </ButtonRow>

        <ButtonRow label="City">
          <div className="city">{user.city}</div>
        </ButtonRow>

        {/* <ButtonRow label="About me">
          <div className="aboutMe">{user.aboutMe}</div>
        </ButtonRow> */}

        <button onClick={handleSave}>Save</button>


        <p>General</p>

        <ButtonRow label="Notifications">
          <div className="notifications">{user.notifications}</div>
        </ButtonRow>

        <ButtonRow label="Display language">
          <div className="displayLanguage">{user.displayLanguage}</div>
        </ButtonRow>

        <p></p>
        <button>Terms of Service</button>
        <button>Privacy Policy</button>
        <button>Help</button>
        <button onClick={handleLogout}>Log Out</button>
        {/* Add buttons for Terms of Service, Privacy Policy, Help, Delete Account */}
      </div>
    </div>

  );
};


export default ProfileSet;
