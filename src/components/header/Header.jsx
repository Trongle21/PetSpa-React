import React, { useEffect, useRef, useState } from "react";
import HeaderAccountIcon from "./HeaderAccountIcon";
import HeaderBar from "./HeaderBar";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderNavMb from "./HeaderNavMb";
import HeaderSignIn from "./HeaderSignIn";
import useAppContext from "../../hooks/useAppContext";

const Header = () => {
  const { isShowHeader, isShowNavBar, onShowNavBar } = useAppContext();

  const handleCloseNavBar = () => {
    onShowNavBar();
  };

  return (
    <header className="page-header--section">
      <div className={`page--header ${isShowHeader ? "bg" : ""}`}>
        <HeaderBar />
        <HeaderLogo />
        <div
          className={`overlay ${isShowNavBar ? "show--overlay" : ""}`}
          onClick={handleCloseNavBar}
        ></div>
        {/* PC */}
        <HeaderNav />
        <HeaderSignIn />
        <HeaderAccountIcon />
        {/* Mobile & Tablet */}
        <HeaderNavMb />
      </div>
    </header>
  );
};

export default Header;
