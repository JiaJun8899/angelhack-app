// import { useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Explore from './pages/explore/explore'
import SavingsAccount from './pages/explore/savings-account'
import EducationLoan from './pages/explore/education-loan'
import Profile from './pages/profile/profile'
import Header from './components/header'

const App = () => {

  return (
    <>
      <Router>
        <div className='flex flex-col items-center overflow-hidden w-auto'>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/savings-account" element={<SavingsAccount />} />
            <Route path="/explore/education-loan" element={<EducationLoan />} />
            <Route path="/profile" element={<Profile />} />
            {/* Add a catch-all route for any unknown paths */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          <Navbar />
        </div>
      </Router>
    </>
  )
}

export default App