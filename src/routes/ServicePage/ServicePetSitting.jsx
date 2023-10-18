import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServicePetSitting = () => {
  const [isShowPetSitting, setIsShowPetSitting] = useState();

  return (
    <div className="service--blog service-4 service--padding">
      <div className="service--wrapper row">
        <div className="service--image l-2 m-2">
          <img src="https://i.ibb.co/q7XqphM/service-4.png" alt="" />
        </div>
        <div className="service--des l-10 m-10">
          <div className="service--title">
            <div
              className="service--title--wrapper"
              onClick={() => setIsShowPetSitting(!isShowPetSitting)}
            >
              <div className="service--title__mb">
                <div className="service--image__mb">
                  <img src="https://i.ibb.co/q7XqphM/service-4.png" alt="" />
                </div>
                <h6>Huấn luyện Pet</h6>
              </div>
              <div className="service--mb__icon">
                <i
                  className={`fa-solid fa-plus ${
                    isShowPetSitting ? "rotate" : ""
                  }`}
                ></i>
              </div>
            </div>
            <Link
              to="/serviceBook"
              className={`service--mb ${
                isShowPetSitting ? "show--service" : "hidden--service"
              }`}
            >
              <button className="btn btn--secondary">Đặt ngay</button>
            </Link>
          </div>
          <div
            className={`service--mb ${
              isShowPetSitting ? "show--service" : "hidden--service"
            }`}
          >
            <h5>Thứ Hai - Chủ Nhật / 8:00 sáng - 6:00 chiều</h5>
            <p>
              Dành cho mèo và chó con. Mỗi lần thăm khám 30 phút bao gồm cho
              ăn/tươi nước, bảo trì rác/thùng và thời gian vui chơi trong nhà.
              đi bộ cứu trợ có thể được cung cấp cho chó con theo yêu cầu.
            </p>
            <div className="service--content row">
              <div className="service--content__info pet--sitting l-12 m-12 c-12">
                <div className="service--content__price">
                  <h6>Huấn luyện</h6>
                </div>
                <ul>
                  {data["petSitting"].map((service, index) => (
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

export default ServicePetSitting;
