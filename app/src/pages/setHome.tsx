import React from 'react';
import '../styles/App.scss';
import Menubar from '../components/Navigation/Menubar/Menubar';

const Home: React.FC = () => {
  return (
    <div>
      <Menubar />
      <div className="Page-container">
        <h1>Adjust</h1>
        <p>Welcome to the home page of our application!</p>
      </div>
    </div>
  );
};

export default Home;
