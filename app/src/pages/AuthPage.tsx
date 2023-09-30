import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import '../styles/AuthPage.scss';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');  // Changed username to email
  const [password, setPassword] = useState<string>('');

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('New user:', user);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User details:', user);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="auth-container">
      <h1>Login / Signup Page</h1>
      <div className="auth-form">
        <input 
          type="email"  // Changed from text to email
          placeholder="Email"  // Changed from Username to Email
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign Up</button>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
    </div>
  );
};


export default AuthPage;
