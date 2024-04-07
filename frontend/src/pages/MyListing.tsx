import React from 'react'
import MyListingCard from '../components/MyListingCard'
import '../css/mylisting.css'
const MyListing = () => {
  return (
    <div className='myListingContainer'>
      <div className='myListingContent'>
        <div className='myListingContentHeader'>

          <p className='myListingContentHeaderTitle'>My Listings</p>
          <div className='myListingContentHeaderInfo'>
            <p>Number of posts: 2</p>
          </div>
        </div>
        <div className='myListingContentBody'>
            <p>Posts</p>
            <div className='myListingCardContainer'>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
              <MyListingCard/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default MyListing
