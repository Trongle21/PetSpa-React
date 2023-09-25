import React from "react";
import useAppContext from "../../hooks/useAppContext";
import data from "../../data.json";
import { Link } from "react-router-dom";

const HeaderNavMb = () => {
  const { isShowNavBar, onShowNavBar } = useAppContext();

  const navigation = data["navigation"];

  return (
    <nav className={`header--nav-mb ${isShowNavBar ? "show--nav__bar" : ""} `}>
      <div className="nav--mb_close" onClick={onShowNavBar}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <ul className="header--nav-mb__link mobile">
        {navigation.map((nav, index) => (
          <li className="header--nav-mb__link--item" key={index}>
            <Link to={nav.url}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavMb;
