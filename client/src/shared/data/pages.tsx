import { Home } from '../../pages/home/Home';
import { About } from '../../pages/about/About';

const PAGES = [
  { name: 'home', path: '', element: <Home /> },
  { name: 'about', path: 'about', element: <About /> },
  { name: 'events', path: 'events', element: <Home /> },
  { name: 'blog', path: 'blog', element: <Home /> },
  { name: 'sponsorship', path: 'sponsorship', element: <Home /> },
];

export { PAGES };
