import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home';
import './index.css'
import Header from './components/header';
import Navbar from './components/navbar';
import Explore from './pages/explore/explore';
import Profile from './pages/profile/profile';
import SavingsAccount from './pages/explore/savings-account';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EducationLoan from './pages/explore/education-loan';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/explore",
    element: <Explore />
  },
  {
    path: "/explore/savings-account",
    element: <SavingsAccount />
  },
  {
    path: "/explore/education-loan",
    element: <EducationLoan />
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
