import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import index from './pages/index'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from '../../frontend/src/pages/Dashboard.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={index}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
