import { Home } from '../../pages/home/Home';
import { UpcomingPage } from '../layouts/UpcomingPage';

const PAGES = [
  { name: 'home', path: '', element: <Home /> },
  { name: 'about', path: 'about', element: <UpcomingPage /> },
  { name: 'events', path: 'events', element: <UpcomingPage /> },
  { name: 'blog', path: 'blog', element: <UpcomingPage /> },
  { name: 'sponsorship', path: 'sponsorship', element: <UpcomingPage /> },
];

export { PAGES };
