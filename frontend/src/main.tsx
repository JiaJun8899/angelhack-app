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
import Layout from './layout';
import SocialMediaFeed from './pages/feed/feed';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },  {
    path: "/feed",
    element: <Layout><SocialMediaFeed/></Layout>
  },
  {
    path: "/home",
    element: <Layout><Home/></Layout>
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
    element: <Layout><Profile /></Layout>
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
