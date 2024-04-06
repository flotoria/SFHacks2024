import React from 'react';
import '../css/RentOutForm.css'; 

const RentOutForm = () => {
  return (
    <div className="rentOutForm">
      <div className="formHeader">
        <h2>List Your Property</h2>
        {}
      </div>
      <form>
        <div className="formGroup">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Property address" />
        </div>
        <div className="formGroup">
          <label htmlFor="city">City</label>
          <input type="text" id="city" value="San Francisco" readOnly />
        </div>
        <div className="formGroup">
          <label htmlFor="zipcode">Zipcode</label>
          <input type="text" id="zipcode" placeholder="Zipcode" />
        </div>
        <div className="formGroup">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" value="United States of America" readOnly />
        </div>
        <div className="formGroup">
          <label htmlFor="rentPrice">Rent Price</label>
          <input type="number" id="rentPrice" placeholder="Monthly rent price" />
        </div>
        <div className="formGroup">
          <label htmlFor="description">Description</label>
          <textarea id="description" placeholder="Describe the property" rows="4"></textarea>
        </div>
        <div className="formGroup">
          <label htmlFor="images">Add Photos</label>
          <input type="file" id="images" multiple accept="image/*" />
        </div>
        <button type="submit" className="submitBtn">Submit Listing</button>
      </form>
    </div>
  );
};

export default RentOutForm;
