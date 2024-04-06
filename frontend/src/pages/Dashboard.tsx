import React, { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import '../css/dashboard.css';
import RentCard from '../components/RentCard';
import RentOutForm from '../pages/RentOutForm'; // Make sure this path is correct

const Dashboard = () => {
  const [showContent, setShowContent] = useState('cards');

  // Function to show the RentOutForm
  const handleRentOutClick = () => {
    setShowContent('form');
  };

  // Function to return to the dashboard cards view
  const handleDashboardClick = () => {
    setShowContent('cards');
  };

  return (
    <div className='dashboard'>
      <div className='tab_bar'>
        <div className='tabBarLeftSide'>
          <FaHouse size={30} color='#444B6E'/>
          <p className='dashboard_app_name'>House Share</p>
        </div>
        <div>
          <button className='tabBarButton' onClick={handleDashboardClick}>Dashboard</button>
          <button className='tabBarButton'>Inbox</button>
          <button className='tabBarButton' onClick={handleRentOutClick}>Rent out</button>
          <button className='tabBarButton'>My listings</button>
          <button className='tabBarButton'>Sign out</button>
        </div>
      </div>
      {showContent === 'cards' ? (
        <div className='rentCardContainer'>
          <RentCard/>
          {/* Render other RentCard components as needed */}
        </div>
      ) : showContent === 'form' ? (
        <RentOutForm onClose={() => setShowContent('cards')} />
      ) : null}
    </div>
  );
};

export default Dashboard;
