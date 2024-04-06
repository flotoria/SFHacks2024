import React from 'react'
import  '../css/layout.css'
import { FaHouse } from "react-icons/fa6";
import { doSignOut } from '../firebase/auth'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='tab_bar'>
          <div className='tabBarLeftSide'>
            <FaHouse size={30} color='#444B6E'/>
            <p className='dashboard_app_name'>House Share</p>
          </div>
          <div>
            <button className='tabBarButton' onClick={() => navigate("/")}>Dashboard</button>
            <button className='tabBarButton' onClick={() => {
                navigate("/inbox");
              }} >Inbox</button>
            <button className='tabBarButton'  onClick={() => navigate("/rentout")} >Rent out</button>
            <button className='tabBarButton' onClick={() => navigate("/mylistings")}>My listings</button>
            <button className='tabBarButton' onClick={() => { 
                doSignOut();
                navigate("/login");
              } }>Sign out</button>
          </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout
