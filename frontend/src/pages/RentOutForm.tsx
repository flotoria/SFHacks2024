import React, { useState } from 'react';
import '../css/RentOutForm.css';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useAuth } from '../contexts/authContext/authContext';
import { db, storage } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';


const RentOutForm = () => {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('San Francisco');
  const [zipCode, setZipcode] = useState('');
  const [country, setCountry] = useState('United States of America');
  const [rentPrice, setRentPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const auth = useAuth();

  const onSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      if (auth.userLoggedIn) {
        const imageUid = v4();
        const storageRef = ref(storage, `images/${imageUid}`);
        if (image) {
          await uploadBytes(storageRef, image);
        }
        const docRef = await addDoc(collection(db, "rentals"), {
          userId: auth.currentUser.uid,
          email: auth.currentUser.email,
          address: address,
          city: city,
          zipCode: zipCode,
          country: country,
          rentPrice: rentPrice,
          description: description,
          imageId: imageUid
        });
        window.location.reload();
      }
    }
    catch {
      console.log("Error adding document");
    }
  }
  return (
    <div className='rentOutFormContainer'>
        <div className="rentOutForm">
          <div className="formHeader">
            <h2>List Your Property</h2>
            { }
          </div>
          <div className="formGroup">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" onChange={(e) => setAddress(e.target.value)} placeholder="Property address" />
          </div>
          <div className="formGroup">
            <label htmlFor="city">City</label>
            <input type="text" id="city" value="San Francisco" readOnly />
          </div>
          <div className="formGroup">
            <label htmlFor="zipcode">Zipcode</label>
            <input type="text" id="zipcode" onChange={(e) => setZipcode(e.target.value)} placeholder="Zipcode" />
          </div>
          <div className="formGroup">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" value="United States of America" readOnly />
          </div>
          <div className="formGroup">
            <label htmlFor="rentPrice">Rent Price</label>
            <input type="number" id="rentPrice" onChange={(e) => setRentPrice(e.target.value)} placeholder="Monthly rent price" />
          </div>
          <div className="formGroup">
            <label htmlFor="description">Description</label>
            <textarea id="description" placeholder="Describe the property" onChange={(e) => setDescription(e.target.value)} rows={4}></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor="images">Add Photos</label>
            <input type="file" id="images" onChange={(e) => e.target.files && setImage(e.target.files[0])} multiple accept="image/*" />
          </div>
          <button type="submit" onClick={onSubmit} className="submitBtn">Submit Listing</button>
        </div>
    </div>
  );
};

export default RentOutForm;
