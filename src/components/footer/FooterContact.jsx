// eslint-disable-next-line no-unused-vars
import React from "react";
import data from "../../data.json";

const FooterContact = () => {
  const linkContact = data["linkContact"];

  return (
    <div className="page--footer__contact l-4 m-6 c-12">
      <div className="page--footer__contact--wrapper">
        <h6 className="fw-800">Contact</h6>
        <p>
          Có một câu hỏi cho chúng tôi? Chúng tôi sẽ giải đáp vấn đề của bạn tại
          đây
        </p>
        <div className="link--contact">
          {linkContact.map((link, index) => (
            <a key={index} href={link.url}>
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
