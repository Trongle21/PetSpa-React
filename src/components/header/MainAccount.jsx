// eslint-disable-next-line no-unused-vars
import React from "react";
import MainAccountSignIn from "./MainAccountSignIn";
import MainAccountSignUp from "./MainAccountSignUp";

const MainAccount = () => {
  return (
    <div className="main--account">
      <div className="main--account__signin">
        <div className="main--account_sigin--wrapper l-4 m-6 c-8">
          <MainAccountSignIn />
          <MainAccountSignUp />
        </div>
      </div>
    </div>
  );
};

export default MainAccount;
