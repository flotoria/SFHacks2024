import React from 'react'
import '../css/rentCard.css'

const RentCard = ({id, title, desc}) => {
  return (
    <div class="card">
 <div class="image"></div>
  <div class="content">
    <a href="#">
      <span class="title">
        {title}
      </span>
    </a>

    <p class="desc">
      {desc}
    </p>

    <a class="action" href="#">
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
