import React from 'react'
import '../css/rentCard.css'

interface RentCardProps {
  id: string;
  title: string;
  desc: string;

}

const RentCard = ({id, title, desc}: RentCardProps) => {
  return (
    <div className="card">
 <div className="image"></div>
  <div className="content">
    <a href="#">
      <span className="title">
        {title}
      </span>
    </a>

    <p className="desc">
      {desc}
    </p>

    <a className="action" href="#">
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
