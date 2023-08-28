import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import NavLogo from '../../assets/cropped_logo.png';

import { PAGES } from '../data/pages';

export const NavigationBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <>
      <div
        className={`fixed z-10 ${
          show ? 'top-0' : '-top-[20vh]'
        } h-[20vh] w-full bg-white transition-[top] ease-in duration-500`}
      >
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
                    className={`RegoBook ${
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
