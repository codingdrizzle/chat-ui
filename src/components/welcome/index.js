import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography, Input, Button } from 'antd'
import './styles.css'

const Welcome = () => {
    const [username, setUsername] = useState('')
    const { Title, Text } = Typography
    return (
        <Row justify='center' align='middle' className='centered' gutter={[0, 20]}>
            <Col span={18} style={{textAlign: 'center'}}>
                <Title level={5} style={{margin: 0}}>Please enter your name below</Title>
            </Col>
            <Col span={18}>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} type='text' autoFocus className='welcome-input'/>
            </Col>
            <Col span={18}>
                <Link to={`/chat/${username}`}>
                <Button className='welcome-button'>Enter chat room</Button>
                </Link>
            </Col>
        </Row>
    )
}

export default Welcome