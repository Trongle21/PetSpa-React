import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServiceBoarding = () => {
  const [isShowBoarding, setIsShowBoarding] = useState();

  return (
    <div className="service--blog service-3 service--padding">
      <div className="service--wrapper row">
        <div className="service--image l-2 m-2">
          <img src="https://i.ibb.co/n81PbX5/service-3.webp" alt="" />
        </div>
        <div className="service--des l-10 m-10">
          <div className="service--title">
            <div
              className="service--title--wrapper"
              onClick={() => setIsShowBoarding(!isShowBoarding)}
            >
              <div className="service--title__mb">
                <div className="service--image__mb">
                  <img src="https://i.ibb.co/n81PbX5/service-3.webp" alt="" />
                </div>
                <h6>Nội trú</h6>
              </div>
              <div className="service--mb__icon">
                <i
                  className={`fa-solid fa-plus ${
                    isShowBoarding ? "rotate" : ""
                  }`}
                ></i>
              </div>
            </div>
            <Link
              to="/serviceBook"
              className={`service--mb ${
                isShowBoarding ? "show--service" : "hidden--service"
              }`}
            >
              <button className="btn btn--secondary">Đặt ngay</button>
            </Link>
            <Link
              to="https://pawpartner.com/throw-me-a-bone---525-w-52nd-st"
              className={`service--mb ${
                isShowBoarding ? "show--service" : "hidden--service"
              }`}
            >
              <button className="btn btn--primary">Đặt LIC</button>
            </Link>
          </div>
          <div
            className={`service--mb ${
              isShowBoarding ? "show--service" : "hidden--service"
            }`}
          >
            <h5>Thứ Hai - Chủ Nhật / 24 giờ</h5>
            <p>
              Dịch vụ lên máy bay qua đêm của chúng tôi cung cấp một giải pháp thuận tiện cho
               những con chó năng động hơn của chúng tôi. Mỗi lần lưu trú 24 giờ bao gồm chăm sóc ban ngày, cứu trợ
               đi bộ, tất cả các lần cho ăn và hình ảnh hàng ngày. Cam phát trực tiếp cũng được
               có sẵn trong giờ giữ trẻ để kiểm tra khi bạn muốn và
               xem thú cưng của bạn đang hoạt động như thế nào.
            </p>
            <div className="service--content row">
              <div className="service--content__info boarding l-12 m-12 c-12">
                <div className="service--content__price">
                  <h6>Nội trú *</h6>
                </div>
                <ul>
                  {data["boarding"].map((service, index) => (
                    <li key={index}>
                      <p>{service.name}</p>
                      <p>
                        ${service.price} / {service.time}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoarding;
