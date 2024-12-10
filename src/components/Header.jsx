import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-600 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyApp</div>

        {/* Navigatsiya */}
        <div className="flex space-x-4">
          {/* Home */}
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold px-4 py-2 rounded-lg bg-blue-800"
                : "text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            }
          >
            Home
          </NavLink>

          {/* Register */}
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold px-4 py-2 rounded-lg bg-blue-800"
                : "text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            }
          >
            Register
          </NavLink>

          {/* Login */}
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold px-4 py-2 rounded-lg bg-blue-800"
                : "text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            }
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
