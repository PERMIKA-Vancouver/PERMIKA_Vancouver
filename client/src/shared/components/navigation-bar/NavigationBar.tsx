import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import NavLogo from '../../../assets/cropped_logo.png';

import { PAGES } from '../../data/pages';
import { Footer } from '../Footer';
import { SandwichNavbar } from './SandwichNavbar';
import { MOBILE_WIDTH } from '../../data/common';

export const NavigationBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div
        className={`fixed z-10 ${
          show ? 'top-0' : '-top-[20vh]'
        } h-[10vh] sm:h-[20vh] w-full bg-white transition-[top] ease-in duration-500`}
      >
        <div className="absolute top-[50%] -translate-y-2/4 flex justify-between items-center w-full">
          <div className="ml-[10%] sm:ml-[4%]">
            <Link to="/">
              <img
                src={NavLogo}
                alt=""
                className="w-[2.125rem] sm:w-[55px] h-auto"
              />
            </Link>
          </div>
          {windowWidth < MOBILE_WIDTH ? (
            <SandwichNavbar />
          ) : (
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
          )}
        </div>
      </div>
      <>
        <Outlet />
      </>
      <>
        <Footer />
      </>
    </>
  );
};