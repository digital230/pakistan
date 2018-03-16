import About from './pages/About';
import Home from './pages/Home';

export default [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/about',
    component: About,
  },
]
