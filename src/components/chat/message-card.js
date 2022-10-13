import React from 'react'
import { useParams } from 'react-router-dom'
import './styles.css'

const MessageCard = ({ sender, message}) => {
    const username = useParams().id
    console.log(username)
  return (
      <div className='message-card' style={{ background: username === sender && '#000038'}}>
        {message}
    </div>
  )
}

export default MessageCard