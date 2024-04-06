import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'
import '../css/auth.css'
import { doSignInWithEmailAndPassword } from '../firebase/auth'

function HomePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await doSignInWithEmailAndPassword(email, password);
          console.log(response)
          navigate("/dashboard");
        }
        catch {
          setError(true)
        }
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
              { error && <p className="text-red-600 mb-3">Passwords are not matching or email already exists.</p>}
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
  
  