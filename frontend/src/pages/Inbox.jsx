import React from 'react'
import '../css/inbox.css'
import MessageCard from '../components/MessageCard'
const Inbox = () => {
  return (
    <div className='inbox'>
      <div className='list_of_messages'>
        <div className='list_of_messages_title_container'>
          <p className='list_of_messages_title'>Your Messages</p>
        </div>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
        <MessageCard/>
      </div>

      <div className='messageContent'>
        <div className='messageContentHeader'>
          <div className='messageContentHeaderInfo'>
            <div className='messageContentHeaderAvatar'/>
            <p className='messageContentHeaderInfo'>SfHacks</p>
          </div>
        </div>
        <div className='messagesContainer'>
            {/* message goes here */}
          </div>
          <input placeholder="Enter your text..." className="messageInputTextBox" name="text" type="text"></input>
      </div>

    </div>
  )
}

export default Inbox
