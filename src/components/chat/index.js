import React, { useState, useEffect, useCallback } from 'react'
import { Row } from 'antd'
import { useParams } from 'react-router-dom'
import TextBox from './textbox'
import MessageCard from './message-card'

const Chat = () => {
    const [chats, setChats] = useState(JSON.parse(localStorage.getItem("chat")))
    const getUsername = useParams().id

    var chatHistory = JSON.parse(localStorage.getItem("chat"));

    const handleSend = (msg) => {
        if (!localStorage.getItem("chat")) {
            localStorage.setItem("chat", JSON.stringify([]));
        }
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        chatHistory.push({ sender: getUsername, message: msg, timestamp: time });
        localStorage.setItem("chat", JSON.stringify(chatHistory));
        setChats(JSON.parse(localStorage.getItem("chat")))
    }

    // useEffect(() => {
    // }, [chats])
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', padding: 20, width: '100%', height: '100%'}}>

                {
                    !chats ? <p>No Chats</p> :
                    chats.map(item => {
                        return item.sender === getUsername ? <MessageCard style={{ alignSelf: 'flex-start' }} message={item.message} sender={item.sender} time={item.timestamp}/> : 
                        <MessageCard style={{ alignSelf: 'flex-end' }} message={item.message} sender={item.sender} time={item.timestamp}/>
                    })
                }
            </div>
            <TextBox isClicked={handleSend} />
        </>
    )
}

export default Chat