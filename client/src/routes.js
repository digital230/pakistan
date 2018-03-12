import About from './About';
import Home from './Home';

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
