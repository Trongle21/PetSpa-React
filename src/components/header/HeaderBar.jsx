// eslint-disable-next-line no-unused-vars
import React from "react";
import useAppContext from "../../hooks/useAppContext";
const HeaderBar = () => {
  const { isShowNavBar, onShowNavBar } = useAppContext();

  return (
    <div
      className={`header--bar ${isShowNavBar ? "opacity" : ""}`}
      onClick={onShowNavBar}
    >
      <i className="fa-sharp fa-solid fa-bars"></i>
    </div>
  );
};

export default HeaderBar;
