import React from 'react'
import '../css/rentCard.css'
const RentCard = () => {
  return (
    <div class="card">
 <div class="image"></div>
  <div class="content">
    <a href="#">
      <span class="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </a>

    <p class="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium 
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