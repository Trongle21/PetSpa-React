// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterInfo from "./FooterInfo";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="page-footer--section">
      <div className="container">
        <div className="page--footer row">
          <FooterInfo />
          <FooterNav />
          <FooterContact />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
