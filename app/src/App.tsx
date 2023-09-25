import React, { useState } from 'react';

import logo from './logo.svg';
import './styles/App.scss';
import Menubar from './components/Navigation/Menubar/Menubar'; // Importing the Menubar component
import Navbar from './components/Navigation/Navbar/Navbar'; // Importing the Navbar component
import Home from './pages/home'; // Import your Home component
import Explore from './pages/explore'; // Import your Explore component
import Challenges from './pages/challenges'; // Import your Challenges component
import Collection from './pages/collection'; // Import your Collection component
import Notifications from './pages/notifications'; // Import your Notifications component
import Profile from './pages/profile'; // Import your Profile component






function App() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  
  const renderPage = () => {
    switch (selectedIcon) {
      case 'FaHome':
        return <Home />;
      case 'FaSearch':
        return <Explore />;
      case 'FaBolt':
        return <Challenges />;
      case 'FaBookmark':
        return <Collection />;
      case 'FaBell':
        return <Notifications />;
      case 'FaUser':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Menubar />

      <Navbar setSelectedIcon={setSelectedIcon} selectedIcon={selectedIcon} />
      {/* Add this line to render the page content */}
      <main className="App-content">
        {renderPage()}
      </main>
    </div>

  );
}

export default App;
