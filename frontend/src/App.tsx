
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/authContext/authContext';
import HomePage from './pages/Login';
import SignUp from './pages/SignUp'
import Inbox from './pages/Inbox'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <AuthProvider>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </BrowserRouter> 
    </AuthProvider>
  );
}

export default App;
