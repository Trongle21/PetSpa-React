import React, { useState } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

const ServiceDogWalking = () => {
  const [isShowPetWalking, setIsShowPetWalking] = useState();

  return (
    <div className="service--blog service-1 service--padding">
      <div className="service--wrapper row">
        <div className="service--image l-2 m-2">
          <img src="https://i.ibb.co/GsY6JWd/service-1.webp" alt="" />
        </div>
        <div className="service--des l-10 m-10">
          <div className="service--title">
            <div
              className="service--title--wrapper"
              onClick={() => setIsShowPetWalking(!isShowPetWalking)}
            >
              <div className="service--title__mb">
                <div className="service--image__mb">
                  <img src="https://i.ibb.co/GsY6JWd/service-1.webp" alt="" />
                </div>
                <h6>Đi dạo</h6>
              </div>
              <div className="service--mb__icon">
                <i
                  className={`fa-solid fa-plus ${
                    isShowPetWalking ? "rotate" : ""
                  }`}
                ></i>
              </div>
            </div>
            <Link
              to="/serviceBook"
              className={`service--mb ${
                isShowPetWalking ? "show--service" : "hidden--service"
              }`}
            >
              <button className="btn btn--secondary">Đặt ngay</button>
            </Link>
          </div>
          <div
            className={`service--mb ${
              isShowPetWalking ? "show--service" : "hidden--service"
            }`}
          >
            <h5>Thứ Hai - Thứ Sáu / 9:00 sáng - 7:00 tối</h5>
            <p>
               Sức khỏe của Thú cưng của bạn phụ thuộc vào thói quen và tính nhất quán, điều này
               đó là lý do tại sao chúng tôi chỉ định cho họ một Chuyên gia chăm sóc thú cưng được chỉ định và thường xuyên
               cửa sổ đón khách.
            </p>
            <div className="service--content row">
              <div className="service--content__info cheap l-6 m-6 c-12">
                <div className="service--content__price">
                  <h6>30 Minus</h6>
                  <h6>$30</h6>
                </div>
                <ul>
                  {data["dog_walking"]["30 minus"].map((service, index) => (
                    <li key={index}>
                      <p>{service.name}</p>
                      <p>${service.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service--content__info expensive l-6 m-6 c-12">
                <div className="service--content__price">
                  <h6>60 Minus</h6>
                  <h6>$50</h6>
                </div>
                <ul>
                  {data["dog_walking"]["60 minus"].map((service, index) => (
                    <li key={index}>
                      <p>{service.name}</p>
                      <p>${service.price}</p>
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

export default ServiceDogWalking;
