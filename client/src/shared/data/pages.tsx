import { About } from '../../pages/about/About';
import { Blog } from '../../pages/blog/Blog';
import { Events } from '../../pages/events/Events';
import { Home } from '../../pages/home/Home';
import { Order } from '../../pages/order/Order';
import { Orders } from '../../pages/order/Orders';
import { Partnerships } from '../../pages/partnerships/Partnerships';
import { Gallery } from '../../pages/gallery/Gallery';
import { Nextgen } from '../../pages/nextgen/Nextgen';

const PAGES = [
  { name: 'home', path: '', element: <Home /> },
  { name: 'about', path: 'about', element: <About /> },
  { name: 'events', path: 'events', element: <Events /> },
  { name: 'blog', path: 'blog', element: <Blog /> },
  { name: 'sponsorship', path: 'sponsorship', element: <Partnerships /> },
  { name: 'merchandise', path: 'order', element: <Order /> },
  { name: 'gallery', path: 'gallery', element: <Gallery /> },
  {
    name: 'orders',
    path: 'secretpathonlyforexecsmerchandiseorders',
    element: <Orders />,
  },
  { name: 'PERMIKA NextGen', path: 'nextgen', element: <Nextgen /> },
];

export { PAGES };
