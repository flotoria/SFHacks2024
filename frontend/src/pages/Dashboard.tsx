import React, { useState, useEffect } from 'react'
import { FaHouse } from "react-icons/fa6";
import '../css/dashboard.css';
import RentCard from '../components/RentCard';
import RentOutForm from '../pages/RentOutForm'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';
import { doSignOut } from '../firebase/auth';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase';

const Dashboard = () => {
  const [rentals, setRentals] = useState<any[]>([]);
  const [showContent, setShowContent] = useState('cards');
  const navigate = useNavigate();

  // Function to show the RentOutForm
  const handleRentOutClick = () => {
    setShowContent('form');
  };

  // Function to return to the dashboard cards view
  const handleDashboardClick = () => {
    setShowContent('cards');
  };

  const fetchRentals = async () => {
    const querySnapshot = await getDocs(collection(db, "rentals"));
    const rentalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRentals(rentalsData);
  }
   
  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <div className='dashboard'>
      <div className='tab_bar'>
        <div className='tabBarLeftSide'>
          <FaHouse size={30} color='#444B6E'/>
          <p className='dashboard_app_name'>House Share</p>
        </div>
        <div>
          <button className='tabBarButton' onClick={handleDashboardClick}>Dashboard</button>
          <button className='tabBarButton' onClick={() => {
              navigate("/inbox");
            }} >Inbox</button>
          <button className='tabBarButton' onClick={handleRentOutClick}>Rent out</button>
          <button className='tabBarButton'>My listings</button>
          <button className='tabBarButton' onClick={() => { 
              doSignOut();
              navigate("/");
             } }>Sign out</button>
        </div>
      </div>
      {showContent === 'cards' ? (
        <div className='rentCardContainer'>
          { rentals.map((rental) => (
            <RentCard key={rental.id} title={rental.address} desc={rental.description} imageUid={rental.imageId} />
            )) }
          {/* Render other RentCard components as needed */}
        </div>
      ) : showContent === 'form' ? (
        <RentOutForm  />
      ) : null}

    </div>
  );
};

export default Dashboard;
