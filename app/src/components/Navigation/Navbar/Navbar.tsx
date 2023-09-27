import React, { useState } from 'react';
import '../../../styles/Navbar.scss';
import { FaHome, FaSearch, FaBolt, FaBookmark, FaBell, FaSlidersH, FaFilter, FaUser, FaFire, FaHeart, FaCheck, FaCog } from 'react-icons/fa';


// import Home from '../../../pages/Home'; // Import your Home component
// import Explore from '../../../pages/Explore'; // Import your Explore component
// import Challenges from '../../../pages/Challenges'; // Import your Challenges component
// import Collection from '../../../pages/Collection'; // Import your Collection component
// import Notifications from '../../../pages/Notifications'; // Import your Notifications component
// import Profile from '../../../pages/Profile'; // Import your Profile component
// import Settings from '../../../pages/setProfile'; // Import your Profile component

// // ...rest of your imports

interface NavbarProps {
  setSelectedIcon: React.Dispatch<React.SetStateAction<string | null>>;
  selectedIcon: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ setSelectedIcon, selectedIcon }) => {
  
  const handleHomeClick = (iconName: string) => {
    if (selectedIcon === 'FaHome' && iconName === 'FaHome') {
      setSelectedIcon('FaSlidersH');
    } else {
      setSelectedIcon(iconName);
    }
  };

  const handleExploreClick = (iconName: string) => {
    if (selectedIcon === 'FaSearch' && iconName === 'FaSearch') {
      setSelectedIcon('FaFilter');
    } else {
      setSelectedIcon(iconName);
    }
  };

  const handleChallengesClick = (iconName: string) => {
    if (selectedIcon === 'FaBolt' && iconName === 'FaBolt') {
      setSelectedIcon('FaFire');
    } else {
      setSelectedIcon(iconName);
    }
  };

  const handleCollectionClick = (iconName: string) => {
    if (selectedIcon === 'FaBookmark' && iconName === 'FaBookmark') {
      setSelectedIcon('FaHeart');
    } else {
      setSelectedIcon(iconName);
    }
  };

  const handleNotificationsClick = (iconName: string) => {
    if (selectedIcon === 'FaBell' && iconName === 'FaBell') {
      setSelectedIcon('FaCheck');
    } else {
      setSelectedIcon(iconName);
    }
  };

  const handleProfileClick = (iconName: string) => {
    if (selectedIcon === 'FaUser' && iconName === 'FaUser') {
      setSelectedIcon('FaCog');
    } else {
      setSelectedIcon(iconName);
    }
  };



  return (
    <div className="app-container">
      <div className="navbar">
        <div
          className={`icon ${selectedIcon === 'FaHome' ? 'icon-selected' : ''}`}
          onClick={() => handleHomeClick('FaHome')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaHome' ? <FaSlidersH /> : <FaHome />}
            <span>{selectedIcon === 'FaHome' ? 'Adjust' : 'Home'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaSearch' ? 'icon-selected' : ''}`}
          onClick={() => handleExploreClick('FaSearch')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaSearch' ? <FaFilter /> : <FaSearch />}
            <span>{selectedIcon === 'FaSearch' ? 'Filter' : 'Explore'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaBolt' ? 'icon-selected' : ''}`}
          onClick={() => handleChallengesClick('FaBolt')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaBolt' ? <FaFire /> : <FaBolt />}
            <span>{selectedIcon === 'FaBolt' ? 'Start' : 'Challenges'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaBookmark' ? 'icon-selected' : ''}`}
          onClick={() => handleCollectionClick('FaBookmark')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaBookmark' ? <FaHeart /> : <FaBookmark />}
            <span>{selectedIcon === 'FaBookmark' ? 'Edit' : 'Collection'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaBell' ? 'icon-selected' : ''}`}
          onClick={() => handleNotificationsClick('FaBell')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaBell' ? <FaCheck /> : <FaBell />}
            <span>{selectedIcon === 'FaBell' ? 'Clear' : 'Notifications'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaUser' ? 'icon-selected' : ''}`}
          onClick={() => handleProfileClick('FaUser')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaUser' ? <FaCog /> : <FaUser />}
            <span>{selectedIcon === 'FaUser' ? 'Settings' : 'Profile'}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;


// const Navbar: React.FC<NavbarProps> = ({ setSelectedIcon, selectedIcon }) => {
//   const handleIconClick = (iconName: string) => {
//     if (selectedIcon === 'FaUser' && iconName === 'FaUser') {
//       setSelectedIcon('FaCog');
//     } else {
//       setSelectedIcon(iconName);
//     }
//   };
