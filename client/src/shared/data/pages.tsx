import { About } from '../../pages/about/About';
import { Blog } from '../../pages/blog/Blog';
import { Events } from '../../pages/events/Events';
import { Home } from '../../pages/home/Home';
import { Order } from '../../pages/order/Order';
import { Partnerships } from '../../pages/partnerships/Partnerships';

const PAGES = [
  { name: 'home', path: '', element: <Home /> },
  { name: 'about', path: 'about', element: <About /> },
  { name: 'events', path: 'events', element: <Events /> },
  { name: 'blog', path: 'blog', element: <Blog /> },
  { name: 'sponsorship', path: 'sponsorship', element: <Partnerships /> },
  { name: 'order', path: 'order', element: <Order /> },
];

export { PAGES };
