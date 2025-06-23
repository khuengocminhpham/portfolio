import React from "react";
import { NavLink, useMatch } from "react-router";

const Nav = () => {
  return (
    <div className="flex flex-col gap-4 text-2xl ">
      <NavLink
        className={({ isActive }) =>
          [isActive ? "underline underline-offset-8 decoration-1" : ""].join(
            " "
          )
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [isActive ? "underline underline-offset-8 decoration-1" : ""].join(
            " "
          )
        }
        to="/project"
      >
        Project
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [isActive ? "underline underline-offset-8 decoration-1" : ""].join(
            " "
          )
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          [isActive ? "underline underline-offset-8 decoration-1" : ""].join(
            " "
          )
        }
        to="/contact"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;
