import React from 'react'
import '../css/mylistingcard.css'
import { CiTrash } from "react-icons/ci";
const MyListingCard = () => {
  return (
    <div className="card">
    <div className="card-img"></div>
    <div className="card-info">
      <p className="text-title">Product title </p>
      <p className="text-body">Product description and details</p>
    </div>
    <div className="card-footer">
    <span className="text-title">$499.49</span>
    <div className="card-button">
      <CiTrash/>
    </div>
  </div></div>
  )
}

export default MyListingCard