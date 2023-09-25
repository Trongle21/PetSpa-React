import React from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="header--logo">
      <img src="https://i.ibb.co/Kr7fQvr/logo.png" alt="" />
      <h2>
        Pet<span>Spa</span>
      </h2>
    </Link>
  );
};

export default HeaderLogo;
