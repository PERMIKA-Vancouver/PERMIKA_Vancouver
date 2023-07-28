import { Link, Outlet } from 'react-router-dom';

import NavLogo from '../../assets/cropped_logo.png';

import { PAGES } from '../data/pages';

export const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-between items-center z-10 w-full mt-10 absolute">
        <div className="ml-16">
          <Link to="/">
            {/*<span className="bg-[#D9D9D9] w-14 h-14 block rounded-full" />*/}
            <img src={NavLogo} alt="" className="w-14 h-auto" />
          </Link>
        </div>
        <div className="flex mr-10">
          {PAGES.filter((page) => page.name !== 'home').map((page) => (
            <Link key={page.name} to={page.path} className="px-6">
              <p className="text-[#BCBCBC] font-normal hover:text-[#4A4A4A]">
                {page.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <>
        <Outlet />
      </>
    </>
  );
};
