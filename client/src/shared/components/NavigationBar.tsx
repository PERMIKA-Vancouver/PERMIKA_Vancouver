import { Outlet } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <p>Navigation Bar</p>
      <Outlet />
    </div>
  );
};
