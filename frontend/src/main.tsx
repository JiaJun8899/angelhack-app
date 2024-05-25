import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home';
import './index.css'
import Explore from './pages/explore/explore';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/explore",
    element: <Explore />
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
