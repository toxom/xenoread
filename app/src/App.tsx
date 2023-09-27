import React, { useState, useEffect } from 'react';
import './context/firebaseConfig'; 
import { getAuth, onAuthStateChanged } from "firebase/auth";


import logo from './logo.svg';
import './styles/App.scss';
import AuthPage from './pages/AuthPage'
import Menubar from './components/Navigation/Menubar/Menubar'; // Importing the Menubar component
import Navbar from './components/Navigation/Navbar/Navbar'; // Importing the Navbar component
import Home from './pages/home'; // Import your Home component
import Explore from './pages/explore'; // Import your Explore component
import Challenges from './pages/challenges'; // Import your Challenges component
import Collection from './pages/collection'; // Import your Collection component
import Notifications from './pages/notifications'; // Import your Notifications component
import Profile from './pages/Profile'; // Import your Profile component






function App() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);  // New state for authentication

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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

  // If not authenticated, show AuthPage
  if (!isAuthenticated) {
    return <AuthPage />;
  }

  return (
    <div className="App">
      <Menubar />
      <Navbar setSelectedIcon={setSelectedIcon} selectedIcon={selectedIcon} />
      <main className="App-content">
        {renderPage()}
      </main>
    </div>
  );
}


export default App;
