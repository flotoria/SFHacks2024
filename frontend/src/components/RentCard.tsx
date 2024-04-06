import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import '../css/rentCard.css';
import { useNavigate } from 'react-router-dom';

interface RentCardProps {
  id: string;
  title: string;
  desc: string;
  imageUid: string;
}

const RentCard = ({id, title, desc, imageUid}: RentCardProps) => {
  const navigate = useNavigate();
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
 <div className="image overflow-hidden">
  <img src={imageURL}></img>
 </div>
  <div className="content">
    <a href="#">
      <span className="title">
        {title}
      </span>
    </a>

    <p className="desc">
      {desc}
    </p>

    <a className="action" onClick={() => navigate("/findoutmore")}>
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>
  )
}

export default RentCard
