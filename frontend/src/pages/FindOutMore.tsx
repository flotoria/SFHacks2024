
import '../css/findoutmore.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';
const FindOutMore = () => {
  const cardInfos = useLocation();
  const navigate = useNavigate();
  return (
    <div className='findOutMorePageContainer'>
     <div className="findOutMoreCard">
        <div>
          <div className='postImgsContainer'>
          <img src={cardInfos.state.imageURL} alt='card-img' className='postImg'></img>
          </div>
          <div className="findOutMoreCard-title">{cardInfos.state.title}, {cardInfos.state.city}, {cardInfos.state.country}, {cardInfos.state.zipCode}</div>
          <div className="findOutMoreCard-title">Landlord's email: {cardInfos.state.email}</div>
          <div className="findOutMoreCard-subtitle">
            {cardInfos.state.desc}
          </div>
        </div>
        <div>
          <hr className="findOutMoreCard-divider"/>
          <div className="findOutMoreCard-footer">
              <div className="findOutMoreCard-price"><span>$</span>{cardInfos.state.rentPrice}</div>
              <div className="tooltip-container">
                <span className="tooltip" onClick={() => navigate('/inbox')}>Contact landlord</span>
                <span className="text">
                  <div className="borde-back">
                    <div className="icon">
                      <FaRegUser/>
                    </div>
                  </div>
                </span>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default FindOutMore