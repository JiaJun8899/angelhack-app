import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/home';
import './index.css'
import Explore from './pages/explore/explore';
import Profile from './pages/profile/profile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from './layout';
import SocialMediaFeed from './pages/feed/feed';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>
  },  {
    path: "/feed",
    element: <Layout><SocialMediaFeed/></Layout>
  },
  {
    path: "/explore",
    element: <Layout><Explore /></Layout>
  },
  {
    path: "/explore",
    element: <Layout><Explore /></Layout>
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
