import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import { useState } from "react";

const ServiceGrooming = () => {
  const [isShowGrooming, setIsShowGrooming] = useState();
  return (
    <div className="service--blog service-2 service--padding">
      <div className="service--wrapper row">
        <div className="service--image l-2 m-2">
          <img src="https://i.ibb.co/bgymvJT/service-2.webp" alt="" />
        </div>
        <div className="service--des l-10 m-10">
          <div className="service--title">
            <div
              className="service--title--wrapper"
              onClick={() => setIsShowGrooming(!isShowGrooming)}
            >
              <div className="service--title__mb">
                <div className="service--image__mb">
                  <img src="https://i.ibb.co/bgymvJT/service-2.webp" alt="" />
                </div>
                <h6>Chải chuốt</h6>
              </div>
              <div className="service--mb__icon">
                <i
                  className={`fa-solid fa-plus ${
                    isShowGrooming ? "rotate" : ""
                  }`}
                ></i>
              </div>
            </div>
            <Link
              to="/serviceBook"
              className={`service--mb ${
                isShowGrooming ? "show--service" : "hidden--service"
              }`}
            >
              <button className="btn btn--secondary">Đặt ngay</button>
            </Link>
          </div>
          <div
            className={`service--mb ${
              isShowGrooming ? "show--service" : "hidden--service"
            }`}
          >
            <h5>Thứ Hai - Chủ Nhật / 8:00 sáng - 6:00 chiều</h5>
            <p>
               Chúng tôi cung cấp đầy đủ các dịch vụ spa và chăm sóc sắc đẹp. Tất cả chải chuốt
               các lựa chọn bao gồm bồn tắm hoàn toàn hữu cơ và không gây dị ứng.
               như sự chú ý từ mũi đến đuôi một cách chi tiết. Giá có thể thay đổi do kích thước,
               tình trạng của bộ lông, thảm, nút thắt và độ dài của tóc.
            </p>
            <div className="service--content row">
              <div className="service--content__info luxury--bath l-6 m-6 c-12">
                <div className="service--content__price">
                  <h6>Phòng tắm sang trọng</h6>
                  <h6>$50</h6>
                </div>
                <ul>
                  {data["grooming"]["luxuryBath"].map((service, index) => (
                    <li key={index}>
                      <p>{service.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service--content__info full--groom l-6 m-6 c-12">
                <div className="service--content__price">
                  <h6>Phòng đầy đủ</h6>
                  <h6>$120</h6>
                </div>
                <ul>
                  {data["grooming"]["fullGroom"].map((service, index) => (
                    <li key={index}>
                      <p>{service.name}</p>
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

export default ServiceGrooming;
