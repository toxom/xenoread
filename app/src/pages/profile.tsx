import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, updateProfile, updatePassword, signOut } from 'firebase/auth'; // Firebase Auth methods
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'; // Firebase Storage methods
import '../styles/App.scss';

const Profile: React.FC = () => {
  const [username, setUsername] = useState('');
  const [editingUsername, setEditingUsername] = useState(false);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState(''); // New state for password change
  const [avatar, setAvatar] = useState('avatar.png');
  const [joinDate, setJoinDate] = useState(''); // State for join date
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUsername(user.displayName || user.email!);
        setEmail(user.email!);
        if (user.photoURL) {
          setAvatar(user.photoURL);
        }

        // Get the user's metadata, including creation time
        const creationTime = user.metadata.creationTime;
        if (creationTime) {
          setJoinDate(creationTime.toString());
        }
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleUsernameChange = () => {
    updateProfile(auth.currentUser!, {
      displayName: username,
    }).then(() => {
      setEditingUsername(false);
    }).catch(error => {
      console.error('Error updating username:', error);
    });
  };

  const handleChangePassword = () => {
    updatePassword(auth.currentUser!, newPassword)
    .then(() => {
      console.log("Password updated!");
      setNewPassword(''); // Reset the password field
    })
    .catch(error => {
      console.error('Error updating password:', error);
    });
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const storageRef = ref(getStorage(), `avatars/${auth.currentUser!.uid}`);
      uploadBytes(storageRef, file).then(snapshot => {
        getDownloadURL(snapshot.ref).then(url => {
          setAvatar(url);
          updateProfile(auth.currentUser!, { photoURL: url });
        });
      });
    }
  };

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log("Logged out successfully!");
    })
    .catch(error => {
      console.error("Error logging out:", error);
    });
  };

  return (
    <div className="Page-container">
      <div className="Profile-container">
        {/* Avatar Section */}
        {/* <div className="avatar-section">
          <img src={avatar} alt="User Avatar" className="avatar" />
          <input type="file" onChange={handleAvatarUpload} />
        </div> */}


      {/* Email Section */}
      {/* <div className="email-section"> */}


        {/* </div> */}

        <div className="input-section">


          {editingUsername ? (
            <>
              <label htmlFor="username">Edit username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <button onClick={handleUsernameChange}>Save</button>
            </>
          ) : (
            <>
              <label htmlFor="username">Username:</label>
              <p onClick={() => setEditingUsername(true)}>{username}</p>
            </>
          )}
          <label>Email:</label>
          <p>{email}</p>
          <label>Join date:</label>
          <p>{joinDate}</p>
          <label>
            New Password:
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
            />
          </label>
          <button onClick={handleChangePassword}>Change Password</button>
          <button onClick={handleLogout}>Logout</button>
        </div>

        
        {/* ...rest of your code... */}
      </div>
    </div>
  );
};

export default Profile;
