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
    username: '',
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
        username: user.username,
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
    <div className="Settings-container">
      <div className="User-info">
        <ButtonRow label="Username">
          <div className="username">{user.username}</div>
        </ButtonRow>

        <ButtonRow label="Email">
          <div className="email">{user.email}</div>
        </ButtonRow>

        {/* Add avatar thumbnail here */}
      </div>

      <div className="Personal-info">
        {/* Country */}
        {/* I speak */}
        {/* City */}
        {/* About me */}
      </div>

      <div className="Notification-info">
        {/* Notification settings */}
        {/* Display language */}
      </div>

      <div className="Action-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleLogout}>Log Out</button>
        {/* Add buttons for Terms of Service, Privacy Policy, Help, Delete Account */}
      </div>
    </div>
  );
};

export default ProfileSet;
