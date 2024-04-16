import { NavLink } from 'react-router-dom';
import { PAGES } from '../../data/pages';

export const MenuInterface = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`absolute right-0 top-full py-5 pl-[1.12rem] pr-[1.19rem] mt-2 bg-white shadow-[-2px_2px_7px_0px_rgba(0,0,0,0.10)] -z-10 ${
        isOpen ? 'block' : 'hidden'
      } animate-growDown origin-top-right`}
    >
      <div className="grid gap-y-[0.4rem]">
        {PAGES.filter(
          (page) =>
            page.name !== 'home' &&
            page.name !== 'merchandise' &&
            page.name !== 'orders'
        ).map((page) => (
          <NavLink key={page.name} to={page.path}>
            {({ isActive }) => (
              <p
                className={`${
                  isActive ? 'text-black-permika' : 'text-light-grey'
                } transition duration-500 ${
                  isOpen ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                {page.name}
              </p>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
