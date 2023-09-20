// eslint-disable-next-line no-unused-vars
import React from "react";
import Image from "../Image";

const FooterInfo = () => {
  return (
    <div className="page--footer__info l-4 m-6 c-12">
      <div className="page--footer__info--wrapper">
        <div className="page--footer__info--logo">
          <div className="header--logo black">
            <Image src="https://i.ibb.co/Kr7fQvr/logo.png" alt="logo page" />
            <h2>
              Pet<span>Spa</span>
            </h2>
          </div>
        </div>
        <div className="page--footer__info--policy">
          <h6>
            © 2023 Petal, Alright Reserved Team of Service | Privacy Policy
          </h6>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
