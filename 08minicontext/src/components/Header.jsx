import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <NavLink to="login" className="text-white">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="profile" className="text-white">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
