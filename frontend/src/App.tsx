import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Login logic stuff can go here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>houseShare</h1>
      </header>
      <main className="main-content">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
            <p className="sign-up">
              New to houseShare? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }
    // Handle sign-up logic here
    console.log('Register with', email, password);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>houseShare</h1>
      </header>
      <main className="main-content">
        <div className="login-container">
          <form className="login-form" onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <label htmlFor="confirm-password">Re-enter Password:</label>
            <input
              type="password"
              id="confirm-password"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
