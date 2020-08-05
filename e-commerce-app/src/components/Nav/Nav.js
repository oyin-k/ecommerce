import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/all">All</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/women">Women</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/men">Men</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
