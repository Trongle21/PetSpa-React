import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../data.json";

const HeaderNav = () => {
  const navigation = data["navigation"];

  return (
    <nav className="header--nav">
      <ul className="header--nav__link pc">
        {navigation.map((nav, index) => (
          <li key={index} className="header--nav__link--item">
            <NavLink to={nav.url}>{nav.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
