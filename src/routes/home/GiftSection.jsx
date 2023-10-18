import React from "react";
import { Link } from "react-router-dom";

const GiftSection = () => {
  return (
    <section className="gift--section container-padding">
      <div className="gift--section__img"></div>
      <div className="container padding-bottom">
        <h4 className="heading-lg text-center fw-800">Liên lạc</h4>
        <h2 className="heading-sm text-center margin-bottom">
        Cửa hàng của chúng tôi là những nhân viên làm việc chăm chỉ
        </h2>
        <div className="gift--section__wrapper row">
          <div className="gift--section__wrapper--info l-6 m-6">
            <h1>Liên hệ với chúng tôi!</h1>
            <p>
            Hãy liên hệ với bộ phận dịch vụ khách hàng của chúng tôi và nhận được món quà đặc biệt dành cho bạn
            mua gói đầu tiên
            </p>
            <Link to="/contact">
              <button className="btn btn--primary">Liên lạc</button>
            </Link>
          </div>
          <div
            className="gift--section__wrapper--image l-6 m-6"
            style={{
              backgroundImage: `url("https://i.ibb.co/92M0V6c/gift-1.png")`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
