import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import { PAGES } from "../../data/pages";
import { Footer } from "../Footer";
import { SandwichNavbar } from "./SandwichNavbar";
import { MOBILE_WIDTH, TABLET_POTRAIT_WIDTH } from "../../data/common";

const GREEN_NAVBAR = ["events", "gallery", "sponsorship", "about"];

export const NavigationBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const pageName = useLocation().pathname.replace("/", "");

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY || window.scrollY === 0) {
        setShow(true);
      } else {
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div
        className={`fixed z-30 ${
          show ? "top-0" : "-top-[20vh]"
        } h-[10vh] sm:h-[15vh] lg:h-[20vh] w-full ${
          GREEN_NAVBAR.includes(pageName) ? "bg-forest-green" : "bg-white"
        } transition-[top] ease-in duration-500`}
      >
        <div className="absolute top-[50%] -translate-y-2/4 flex justify-between items-center w-full">
          <div className="ml-[10%] sm:ml-[4%]">
            <Link to="/">
              <img
                src={
                  GREEN_NAVBAR.includes(pageName)
                    ? "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/logo/cropped_logo_white.png"
                    : "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/logo/cropped_logo.png"
                }
                alt=""
                className="w-[2.125rem] sm:w-[55px] h-auto"
              />
            </Link>
          </div>
          {windowWidth < MOBILE_WIDTH ? (
            <SandwichNavbar />
          ) : (
            <div className="flex mr-[4%] gap-8">
              {PAGES.filter(
                (page) =>
                  page.name !== "home" &&
                  page.name !== "gallery" &&
                  page.name !== "merchandise" &&
                  page.name !== "orders"
              ).map((page) => (
                <NavLink key={page.name} to={page.path}>
                  {({ isActive }) => (
                    <p
                      className={`${
                        !isActive
                          ? "text-light-grey"
                          : GREEN_NAVBAR.includes(pageName)
                          ? "text-white"
                          : "text-black-text"
                      } hover:text-sunset-orange navbar-text transition duration-500`}
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
        <Footer
          isMobileView={windowWidth < MOBILE_WIDTH}
          isTabletPotraitView={windowWidth < TABLET_POTRAIT_WIDTH}
        />
      </>
    </>
  );
};
