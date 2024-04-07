import { useState, useEffect } from 'react'
import '../css/dashboard.css';
import RentCard from '../components/RentCard';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase';
const Dashboard = () => {
  const [rentals, setRentals] = useState<any[]>([]);
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
        <div className='rentCardContainer'>
          {rentals.map((rental) => (
              <RentCard key={rental.id} id={rental.id} title={rental.address} desc={rental.description} imageUid={rental.imageId}/>
            ))}
        </div>
    </div>
  );
};

export default Dashboard;
