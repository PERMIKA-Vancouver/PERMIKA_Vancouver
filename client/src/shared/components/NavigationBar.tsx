import { Link, NavLink, Outlet } from 'react-router-dom';

import NavLogo from '../../assets/cropped_logo.png';

import { PAGES } from '../data/pages';

export const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-between items-center z-10 w-full mt-[3.125rem] absolute">
        <div className="ml-16">
          <Link to="/">
            <img src={NavLogo} alt="" className="w-[55px] h-auto" />
          </Link>
        </div>
        <div className="flex mr-16 gap-8">
          {PAGES.filter((page) => page.name !== 'home').map((page) => (
            <NavLink key={page.name} to={page.path}>
              {({ isActive, isPending }) => (
                <p
                  className={`${
                    isActive ? 'text-[#0A0A0A]' : 'text-[#BCBCBC]'
                  } font-normal hover:text-[#D07D14]`}
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
