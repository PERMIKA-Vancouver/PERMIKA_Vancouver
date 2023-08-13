import { Link, NavLink, Outlet } from 'react-router-dom';

import NavLogo from '../../assets/cropped_logo.png';

import { PAGES } from '../data/pages';
// import { OutletContextType } from '../types/types';

export const NavigationBar = () => {
  // const [navbarHeight, setNavbarHeight] = useState<number>(0);
  // const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     setNavbarHeight(ref.current.clientHeight);
  //     console.log(navbarHeight);
  //   }
  // }, []);

  return (
    <>
      <div className="flex justify-between items-center z-10 w-full mt-[3.125rem] absolute top-0">
        <div className="ml-16">
          <Link to="/">
            <img src={NavLogo} alt="" className="w-[55px] h-auto" />
          </Link>
        </div>
        <div className="flex mr-16 gap-8">
          {PAGES.filter((page) => page.name !== 'home').map((page) => (
            <NavLink key={page.name} to={page.path}>
              {({ isActive }) => (
                <p
                  className={`RegoReg ${
                    isActive ? 'text-black-permika' : 'text-light-grey'
                  } hover:text-sunset-orange font-normal not-italic text-lg leading-[normal]`}
                >
                  {page.name}
                </p>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <>
        <Outlet />
      </>
    </>
  );
};
