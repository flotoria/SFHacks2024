import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'
import '../css/auth.css'

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
                New to houseShare? <Link to="/SignUp">Create an account</Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    );
    
  }

  export default HomePage;
  
  