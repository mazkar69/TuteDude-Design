import React from 'react'
import './App.css'
import { Navbar } from './component/Navbar'
import FriendsRefered from './page/FriendsRefered'
import { Route,Routes } from 'react-router-dom'
import ReferEarn from './page/ReferEarn';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<ReferEarn/>}/>
        <Route path='/friends-referred' element={<FriendsRefered/>} /> 

      </Routes>
    </>
    
  )
}

export default App