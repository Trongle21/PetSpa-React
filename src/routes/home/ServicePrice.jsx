import data from "../../data.json";
import useAppContext from "../../hooks/useAppContext";

// eslint-disable-next-line no-unused-vars
import React from "react";
const homePackage = data["homePackage"];

const ServicePrice = () => {
  const { isShowPackage, onShowPackage } = useAppContext();

  return (
    <section className="service-prices--section container-padding">
      <div className="service-prices--section__img"></div>
      <div className="container">
        <h4 className="heading-lg text-center fw-800">Special Package</h4>
        <h2 className="heading-sm text-center margin-bottom">
          We offer special package just for you and your little family
        </h2>
        <div className="pricing--plan_list padding-bottom row">
          {homePackage.map((specialPackage, index) => (
            <div
              className={`plan--price l-4 m-12 c-12 ${
                index === 1 ? "scale" : ""
              }`}
              key={index}
            >
              <div
                className="plan--price__image"
                style={{ backgroundImage: `url(${specialPackage.image})` }}
                onClick={onShowPackage}
              >
                <div className="plane--price__image-info">
                  <p>{specialPackage.name}</p>
                  <h3>
                    <span>$</span>
                    {specialPackage.price} <span>/Visit</span>
                  </h3>
                </div>
                <div className="plane--overlay"></div>
              </div>
              <div
                className={`plane--price__info ${isShowPackage ? "show" : ""}`}
              >
                <ul>
                  {specialPackage.packages.map((special, index) => (
                    <li key={index}>{special}</li>
                  ))}
                </ul>
              </div>
              <a href="service.html" className="plane--price__btn">
                <button className="btn btn--primary">Buy Now</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePrice;