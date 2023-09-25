import React, { useState } from 'react';
import InputField from '../components/Inputs/InputField'; // Adjust the import to your folder structure
import '../styles/App.scss';

const Profile: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="Page-container">
      <div className="Profile-container">
      <div>
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={handleInputChange}
          />
          {/* rest of your code */}
        </div>
        <div>
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={handleInputChange}
          />
          {/* rest of your code */}
        </div>

        {/* User Info Section */}
        <section className="user-info">
          <img src="avatar.png" alt="User Avatar" className="avatar"/>
          <div className="user-details">
            <h2>Username</h2>
            <p>Joined: January 2023</p>
            <p>Languages: English, Finnish</p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics">
          <h3>Statistics</h3>
          <ul>
            <li>Books Read: 20</li>
            <li>Challenges Completed: 5</li>
            <li>etc...</li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="achievements">
          <h3>Achievements</h3>
          <ul>
            <li>Completed 5 Challenges</li>
            <li>Read 20 Books</li>
            <li>etc...</li>
          </ul>
        </section>

        {/* Feedback Section */}
        <section className="feedback">
          <h3>Feedback</h3>
          <ul>
            <li><a href="#">Rate Xenoread</a></li>
            <li><a href="#">Refer Xenoread</a></li>
            <li><a href="#">Give Us Feedback</a></li>
          </ul>
        </section>
      </div>

      {/* Logout and Version */}
      <div className="footer">
        <button className="logout-button">Logout</button>
        <p>Software Version: 1.0.0</p>
      </div>
    </div>
  );
};

export default Profile;
