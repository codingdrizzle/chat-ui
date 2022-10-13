import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import './styles.css'

const MessageCard = ({ sender, message, time }) => {
    const username = useParams().id
    console.log(username)
    return (
        <div className='message-card' style={{ alignSelf: username === sender && 'flex-end' }}>
            <FaUserCircle size={30}/>
            <div style={{ boxShadow: '1px 1px 10px #ddd', height: 'inherit', width: '100%', padding: 10, borderRadius: 10, background: username === sender && '#000038', color:  username === sender && '#fff'}}>
                <p style={{width: '100%', height: 15, color: '#bbb'}}>{sender}</p>
                {message}
                <p style={{ padding: 0, margin: 0, textAlign: 'right', color: '#bbb' }}>{time}</p>
            </div>  
        </div>
    )
}

export default MessageCard