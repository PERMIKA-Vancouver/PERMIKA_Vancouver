import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as NavLogo } from '../../assets/logo.svg';

export const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-between items-center z-10 w-full mt-10 absolute">
        <div className="ml-6 sm:ml-20 md:ml-6 lg:ml-20">
          <Link to="/">
            {/** <NavLogo className="w-14 sm:w-16 h-auto" /> */}
            <span className="bg-[#D9D9D9] w-14 h-14 block rounded-full" />
          </Link>
        </div>
        <div className="flex mr-18 lg:mr-20">
          <Link to="/" className="px-6">
            <p className="text-[#BCBCBC] font-normal hover:text-[#4A4A4A]">
              about
            </p>
          </Link>
          <Link to="/" className="px-6">
            <p className="text-[#BCBCBC] font-normal">events</p>
          </Link>
          <Link to="/" className="px-6">
            <p className="text-[#BCBCBC] font-normal">blog</p>
          </Link>
          <Link to="/" className="px-6">
            <p className="text-[#BCBCBC] font-normal">sponsorship</p>
          </Link>
        </div>
      </div>
      <>
        <Outlet />
      </>
    </>
  );
};

{
  /**{pages.map((page) => (
              <Link key={page.name} to={page.path} className="px-5 pt-3">
                <p
                  className={`hover:underline underline-offset-8 decoration-2 font-oswald text-xl text-white`}
                >
                  {page.name}
                </p>
              </Link>
            ))} */
}
