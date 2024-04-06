import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    console.log('Sign up with', email, password);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>houseShare</h1>
      </header>
      <main className="main-content">
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            
            <label htmlFor="confirm-password">Re-enter Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
            
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
