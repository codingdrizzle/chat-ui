import React from 'react'
import {useParams} from 'react-router-dom'
import TextBox from './textbox'

const Chat = () => {
    const getUsername = useParams().id

    const handleSend = (e) => {
        localStorage.setItem(getUsername,e.target.value)
    }
  return (
    <>
        <TextBox isClicked = {handleSend}/>
    </>
  )
}

export default Chat