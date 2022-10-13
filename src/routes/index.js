import React from 'react'
import {Routes, Route} from 'react-router-dom'

import WelcomePage from '../pages/welcome'
import ChatPage from '../pages/chat'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/chat/:id' element={<ChatPage/>}/>
    </Routes>
  )
}

export default AppRoutes