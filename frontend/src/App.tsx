import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Explore from './pages/explore/explore'
import SavingsAccount from './pages/explore/savings-account'
import EducationLoans from './pages/explore/education-loans'
import Profile from './pages/profile/profile'
import Header from './components/header'
import SocialMediaFeed from './pages/feed/feed'
import Quiz from './pages/home/lesson'
import RewardsPage from './pages/rewards/rewards'
const App = () => {

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <Router>
        <div className='flex flex-col items-center overflow-hidden w-auto'>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/savings-account" element={<SavingsAccount />} />
            <Route path="/explore/education-loans" element={<EducationLoans />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<SocialMediaFeed />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/rewards" element={<RewardsPage />} />
          </Routes>
          <Navbar />
        </div>
      </Router>
    </>
  )
}

export default App