import React, {useState, useEffect } from 'react'
import '../css/mylistingcard.css'
import { CiTrash } from "react-icons/ci";
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase/firebase';

interface MyListingCardProps {
  title: string;
  desc: string;
  price: number;
  imageUid: string;
}

const MyListingCard = ({title, desc, price, imageUid}: MyListingCardProps) => {

  const [imageURL, setImageURL] = useState('');
  useEffect(() => {
    const imageRef = ref(storage, `images/${imageUid}`);
   

    getDownloadURL(imageRef)
      .then((url) => {
        setImageURL(url);
        
      })
      .catch((error) => {
        console.log(error);
      });
  
  }, []);

  return (
    <div className="card">
    <div className="card-img overflow-hidden">
      <img src={imageURL} alt="img" />
    </div>
    <div className="card-info">
      <p className="text-title">{title}</p>
      <p className="text-body">{desc}</p>
    </div>
    <div className="card-footer">
    <span className="text-title">${price}</span>
    <div className="card-button">
      <CiTrash/>
    </div>
  </div></div>
  )
}

export default MyListingCard