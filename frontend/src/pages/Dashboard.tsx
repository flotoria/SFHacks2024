import React, {useEffect} from 'react'
import { FaHouse } from "react-icons/fa6";
import '../css/dashboard.css'
import RentCard from '../components/RentCard';
import { useAuth } from "../contexts/authContext/authContext"
import { doSignOut } from '../firebase/auth'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const value = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(value);
  }, [])

  return (
    <div className='dashboard'>
      <div className='tab_bar'>
          <div className='tabBarLeftSide'>
            <FaHouse size={30} color='#444B6E'/>
            <p className='dashboard_app_name'>House Share</p>
          </div>
          <div>
            <button className='tabBarButton'>Dashboard</button>
            <button className='tabBarButton' onClick={() => {
              navigate("/inbox");
            }} >Inbox</button>
            <button className='tabBarButton'>Rent out</button>
            <button className='tabBarButton'>My listings</button>
            <button className='tabBarButton' onClick={() => { 
              doSignOut();
              navigate("/");
             } }>Sign out</button>
          </div>
      </div>
      <div className='rentCardContainer'>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
          <RentCard/>
      </div>

    </div>
  )
}

export default Dashboard