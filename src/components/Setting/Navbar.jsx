import React from "react";
import {NavLink} from "react-router-dom";
import navClasses from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navClasses.nav}>
      <ol>
        <li>
          <NavLink to='profile' activeClassName={navClasses.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='diologs'>Messages</NavLink>
        </li>
        <li>
          <NavLink to='#'>News</NavLink>
        </li>
        <li>
          <NavLink to='music'>Music</NavLink>
        </li>
        <li>
          <NavLink to='user'>User</NavLink>
        </li>
        <li>
          <NavLink to='#'>Setting</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
