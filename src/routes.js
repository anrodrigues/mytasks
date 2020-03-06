import React from 'react'
import home from './components/home/home';
import login from "./components/login/login";
import Landing from "./components/landingpage/landingpage";

const routes = [
  {
    path: '/home',
    component: home,
    name: 'home'
  },
  {
    path: '/login',
    component: login,
    name: 'login'
  },
  {
    path: '/',
    component: Landing,
    name: 'landing',
    exact: true
  }
]

export default routes;