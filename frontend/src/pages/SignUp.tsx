import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/auth.css';
import { db } from '../firebase/firebase';
import { doCreateWithEmailAndPassword } from '../firebase/auth'
import { collection, addDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        if (password !== confirmPassword) {
        console.error("Passwords don't match");
        setError(true);
        return;
      }
      const userCredential = await doCreateWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;
      const docRef = await addDoc(collection(db, "users"), {
        id: uid,
        email: email    
      });
      navigate("/");
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

          { error && <p className="text-red-600 mb-3">Passwords are not matching or email already exists.</p>}
            
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
