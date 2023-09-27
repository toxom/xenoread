import React, { useState } from 'react';
import '../../../styles/Navbar.scss';
import { FaHome, FaSearch, FaBolt, FaBookmark, FaBell, FaSlidersH, FaFilter, FaUser, FaFire, FaHeart, FaCheck, FaCog } from 'react-icons/fa';


import Home from '../../../pages/home'; // Import your Home component
import Explore from '../../../pages/explore'; // Import your Explore component
import Challenges from '../../../pages/challenges'; // Import your Challenges component
import Collection from '../../../pages/collection'; // Import your Collection component
import Notifications from '../../../pages/notifications'; // Import your Notifications component
import Profile from '../../../pages/Profile'; // Import your Profile component
// ...rest of your imports

interface NavbarProps {
  setSelectedIcon: React.Dispatch<React.SetStateAction<string | null>>;
  selectedIcon: string | null;
}


const Navbar: React.FC<NavbarProps> = ({ setSelectedIcon, selectedIcon }) => {

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName); // using the prop
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <div
          className={`icon ${selectedIcon === 'FaHome' ? 'icon-selected' : ''}`}
          onClick={() => handleIconClick('FaHome')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaHome' ? <FaSlidersH /> : <FaHome />}
            <span>{selectedIcon === 'FaHome' ? 'Adjust' : 'Home'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaSearch' ? 'icon-selected' : ''}`}
          onClick={() => handleIconClick('FaSearch')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaSearch' ? <FaFilter /> : <FaSearch />}
            <span>{selectedIcon === 'FaSearch' ? 'Filter' : 'Explore'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaBolt' ? 'icon-selected' : ''}`}
          onClick={() => handleIconClick('FaBolt')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaBolt' ? <FaFire /> : <FaBolt />}
            <span>{selectedIcon === 'FaBolt' ? 'Start' : 'Challenges'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaBookmark' ? 'icon-selected' : ''}`}
          onClick={() => handleIconClick('FaBookmark')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaBookmark' ? <FaHeart /> : <FaBookmark />}
            <span>{selectedIcon === 'FaBookmark' ? 'Edit' : 'Collection'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaBell' ? 'icon-selected' : ''}`}
          onClick={() => handleIconClick('FaBell')}
        >
          <div className="icon-content">
            {selectedIcon === 'FaBell' ? <FaCheck /> : <FaBell />}
            <span>{selectedIcon === 'FaBell' ? 'Clear' : 'Notifications'}</span>
          </div>
        </div>
        <div
          className={`icon ${selectedIcon === 'FaUser' ? 'icon-selected' : ''}`}
          onClick={() => handleIconClick('FaUser')}
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
