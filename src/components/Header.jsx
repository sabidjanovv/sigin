import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-2xl">
      <nav className="container mx-auto flex justify-between items-center">
        <div
          className="text-white text-3xl font-bold drop-shadow-lg cursor-pointer"
          onClick={() => navigate("/")} 
        >
          The Legends
        </div>

        <div className="flex space-x-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold px-5 py-2 rounded-lg bg-indigo-700 shadow-lg transform scale-105 transition duration-300"
                : "text-white px-5 py-2 rounded-lg hover:bg-indigo-800 hover:shadow-md hover:scale-105 transition duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold px-5 py-2 rounded-lg bg-indigo-700 shadow-lg transform scale-105 transition duration-300"
                : "text-white px-5 py-2 rounded-lg hover:bg-indigo-800 hover:shadow-md hover:scale-105 transition duration-300"
            }
          >
            Register
          </NavLink>

          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold px-5 py-2 rounded-lg bg-indigo-700 shadow-lg transform scale-105 transition duration-300"
                : "text-white px-5 py-2 rounded-lg hover:bg-indigo-800 hover:shadow-md hover:scale-105 transition duration-300"
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
