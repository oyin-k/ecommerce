import React from "react";

import "./nav.scss";

const Nav = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">Home</li>
            <li className="nav__item">All</li>
            <li className="nav__item">Women</li>
            <li className="nav__item">Men</li>
            <li className="nav__item">Cart</li>
        </ul>
    </nav>
);

export default Nav;