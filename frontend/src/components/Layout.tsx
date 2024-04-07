import React from 'react';
import '../css/layout.css';
import { FaUser } from "react-icons/fa"; 
import { doSignOut } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// Example logo import - adjust the path as necessary
import logoImage from '../assets/HouseShare logo.png'; 

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='tab_bar'>
          <div className='tabBarLeftSide'>
          <FaUser size={30} color='#444B6E'/>
            {/* Logo image added here */}
            <img src={logoImage} alt="Logo" className="logo_image"/>
            <p className='dashboard_app_name'>House Share</p>
          </div>
          <div>
            <button className='tabBarButton' onClick={() => navigate("/")}>Dashboard</button>
            <button className='tabBarButton' onClick={() => navigate("/inbox")}>Inbox</button>
            <button className='tabBarButton' onClick={() => navigate("/rentout")}>Rent out</button>
            <button className='tabBarButton' onClick={() => navigate("/mylistings")}>My listings</button>
            <button className='tabBarButton' onClick={() => navigate("/about")}>About Us</button>
            <button className='tabBarButton' onClick={() => { doSignOut(); navigate("/login"); }}>Sign out</button>
          </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout;
