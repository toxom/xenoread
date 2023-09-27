import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile, signOut } from 'firebase/auth'; // Firebase Auth methods
import { getFirestore, doc, updateDoc } from 'firebase/firestore'; // Firebase Firestore methods
import '../styles/Settings.scss';

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
      // Update the user state with the retrieved data
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
    }
  };

  const handleLogout = () => {
    // Handle user logout
    signOut(auth);
  };

  return (
    <div className="Settings-container">
      <div className="User-info">
        {/* Avatar thumbnail */}
        {/* Username */}
        {/* Email */}
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
