import React, { useState, useEffect } from 'react';
import './context/firebaseConfig'; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from './logo.svg';
import './styles/App.scss';
import AuthPage from './pages/AuthPage'
import Menubar from './components/Navigation/Menubar/Menubar';
import Navbar from './components/Navigation/Navbar/Navbar';
import Home from './pages/Home';
import HomeSet from './pages/setHome';
import Explore from './pages/Explore';
import ExploreSet from './pages/setExplore';
import Challenges from './pages/Challenges';
import ChallengesSet from './pages/setChallenges';
import Collection from './pages/Collection';
import CollectionSet from './pages/setCollection';
import Notifications from './pages/Notifications';
import NotificationsSet from './pages/setNotifications';
import Profile from './pages/Profile';
import ProfileSet from './pages/setProfile';

function App() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // const [currentPage, setCurrentPage] = useState<React.ReactNode | null>(null); // Add state for current page

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);


  const renderPage = () => {
    switch (selectedIcon) {
      case 'FaHome':
        return <Home />;
      case 'FaSlidersH':
        return <HomeSet />;
      case 'FaSearch':
        return <Explore />;
      case 'FaFilter':
        return <ExploreSet />;
      case 'FaBolt':
        return <Challenges />;
      case 'FaFire':
        return <ChallengesSet />;
      case 'FaBookmark':
        return <Collection />;
      case 'FaHeart':
        return <CollectionSet />;
      case 'FaBell':
        return <Notifications />;
      case 'FaCheck':
        return <NotificationsSet />;  
      case 'FaUser':
        return <Profile />;
      case 'FaCog':
        return <ProfileSet />;
      default:
        return <Home />;
    }
  };

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
