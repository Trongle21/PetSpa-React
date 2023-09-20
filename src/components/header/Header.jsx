// eslint-disable-next-line no-unused-vars
import React from "react";
import HeaderAccountIcon from "./HeaderAccountIcon";
import HeaderBar from "./HeaderBar";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderNavMb from "./HeaderNavMb";
import HeaderSignIn from "./HeaderSignIn";

const Header = () => {
  return (
    <header className="page-header--section">
      <div className="page--header">
        <HeaderBar />
        <HeaderLogo />
        <div className="overlay"></div>
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
