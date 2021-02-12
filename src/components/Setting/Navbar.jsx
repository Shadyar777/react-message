import React from "react";
import {NavLink} from "react-router-dom";
import navClasses from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={navClasses.nav}>
      <ol>
        <li>
          <NavLink to='/profile' activeClassName={navClasses.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/diologs' activeClassName={navClasses.active}>Messages</NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName={navClasses.active}>News</NavLink>
        </li>
        <li>
          <NavLink to='/music' activeClassName={navClasses.active}>Music</NavLink>
        </li>
        <li>
          <NavLink to='/user' activeClassName={navClasses.active}>User</NavLink>
        </li>
        <li>
          <NavLink to='/setting' activeClassName={navClasses.active}>Setting</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
