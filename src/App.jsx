import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'

function App() {
  const email = localStorage.getItem('email') 

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={email ? <Home /> : <Navigate to='/register' />}/>
        <Route path='/quiz' element={email ? <Quiz /> : <Navigate to='/register' />} />
      </Routes>
    </div>
  )
}

export default App
