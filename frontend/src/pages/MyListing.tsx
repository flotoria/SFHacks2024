import React, { useState, useEffect } from 'react'
import MyListingCard from '../components/MyListingCard'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { useAuth } from '../contexts/authContext/authContext';
import '../css/mylisting.css'



const MyListing = () => {

  const user = useAuth();
  const [rentals, setRentals] = useState<any[]>([]);
  const fetchRentals = async () => {
    const rentalsRef = collection(db, "rentals");
    const q = query(rentalsRef, where("userId", "==", user.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const rentalsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    setRentals(rentalsData);
  }

  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <div className='myListingContainer'>
      <div className='myListingContent'>
        <div className='myListingContentHeader'>

          <p className='myListingContentHeaderTitle'>My Listings</p>
          <div className='myListingContentHeaderInfo'>
            <p>Number of posts: {rentals.length}</p>
          </div>
        </div>
        <div className='myListingContentBody'>
          <p>Posts</p>
          <div className='myListingCardContainer'>
            {rentals.map((rental) => (
              <MyListingCard key={rental.id} title={rental.address} desc={rental.description} price={rental.rentPrice} imageUid={rental.imageId} />
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default MyListing
