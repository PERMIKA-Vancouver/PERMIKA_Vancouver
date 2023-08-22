import { Link, NavLink, Outlet } from 'react-router-dom';

import NavLogo from '../../assets/cropped_logo.png';

import { PAGES } from '../data/pages';

export const NavigationBar = () => {
  return (
    <>
      <div className="absolute z-10 top-0 h-[20vh] w-full">
        <div className="absolute top-[50%] -translate-y-2/4 flex justify-between items-center w-full">
          <div className="ml-[4%]">
            <Link to="/">
              <img src={NavLogo} alt="" className="w-[55px] h-auto" />
            </Link>
          </div>
          <div className="flex mr-[4%] gap-8">
            {PAGES.filter((page) => page.name !== 'home').map((page) => (
              <NavLink key={page.name} to={page.path}>
                {({ isActive }) => (
                  <p
                    className={`RegoReg ${
                      isActive ? 'text-black-permika' : 'text-light-grey'
                    } hover:text-sunset-orange font-normal not-italic text-lg leading-[normal] transition duration-500`}
                  >
                    {page.name}
                  </p>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <>
        <Outlet />
      </>
    </>
  );
};
