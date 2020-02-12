import home from './components/home/home';
import login from "./components/login/login";

const routes = [
  {
    path: '/home',
    component: home,
    name: 'home',
    exact: true
  },
  {
    path: '/login',
    component: login,
    name: 'login',
    exact: true
  }
]

export default routes;