import React, {useState} from 'react'
import { Col, Input, Button } from 'antd'
import './styles.css'

const TextBox = ({isClicked}) => {
  const [message, setMessage] = useState('')
  return (
    <Col span={24} className={'footer-textbox'}>
      <Input type='text' value={message} onChange={(e) => setMessage(e.target.value)} className='textbox'/>
      <Button className='send-btn' onClick={(e) => isClicked(e)}>Send</Button>
    </Col>
  )
}

export default TextBox