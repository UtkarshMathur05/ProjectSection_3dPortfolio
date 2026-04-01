import React, { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Development from './pages/Development'
import Design from './pages/Design'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/development' element={<Development />} />
        <Route path='/design' element={<Design />} />
      </Routes>
    </>
  )
}

export default App