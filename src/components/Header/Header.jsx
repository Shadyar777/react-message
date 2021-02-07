import React from 'react';
import {NavLink} from 'react-router-dom';
import headerClasses from './Header.module.css';
import logo from "./../../assets/images/LOGO.jfif";

const Header = (props) => {
    // debugger;
  return (
    <header className={headerClasses.header}>
      <img src={logo} alt="LOGO"/>

      <div className={headerClasses.loginBLock}>
      {props.isAuth ? "Вы авторизованы" : <NavLink to={'/login'}>login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
