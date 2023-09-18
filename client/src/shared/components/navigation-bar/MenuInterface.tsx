import { NavLink } from 'react-router-dom';
import { PAGES } from '../../data/pages';

export const MenuInterface = () => {
  return (
    <div className="absolute right-0 p-5 mt-2 bg-white shadow-[-2px_2px_7px_0px_rgba(0,0,0,0.10)] grid gap-y-[0.4rem]">
      {PAGES.filter((page) => page.name !== 'home').map((page) => (
        <NavLink key={page.name} to={page.path}>
          {({ isActive }) => (
            <p
              className={`RegoBook ${
                isActive ? 'text-black-permika' : 'text-light-grey'
              } font-medium not-italic text-[0.75rem] leading-[normal] transition duration-500`}
            >
              {page.name}
            </p>
          )}
        </NavLink>
      ))}
    </div>
  );
};
