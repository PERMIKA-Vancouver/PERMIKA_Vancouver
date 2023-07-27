import { Home } from '../../pages/home/Home';
import { About } from '../../pages/about/About';

const PAGES = [
  { name: 'home', path: '', element: <Home /> },
  { name: 'about', path: 'about', element: <About /> },
  { name: 'events', path: '', element: <Home /> },
  { name: 'blog', path: '', element: <Home /> },
  { name: 'sponsorship', path: '', element: <Home /> },
];

export { PAGES };
