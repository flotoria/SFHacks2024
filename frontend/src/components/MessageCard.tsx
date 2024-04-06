import React from 'react'
import '../css/messageCard.css'
const MessageCard = () => {
  return (
    <div className="info">
        <div className="info__icon">
        
        </div>
        <div className="info__title">
          <div className='senderName'>
            Sfhack
          </div>
          lorem ipsum dolor sit amet
          
        </div>
        <div className="info__close"><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg></div>
    </div>
  )
}

export default MessageCard
