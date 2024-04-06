import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Put sign-up logic stuff here, so email and passwOrd go to database
    if(password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    console.log('Sign up with', email, password);
  };

  return (
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
  );
};

export default SignUp;
