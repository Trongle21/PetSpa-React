import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

const ServiceBoarding = () => {
  return (
    <div className="service--blog service-3 service--padding">
      <div className="service--wrapper row">
        <div className="service--image l-2 m-2">
          <img src="https://i.ibb.co/n81PbX5/service-3.webp" alt="" />
        </div>
        <div className="service--des l-10 m-10">
          <div className="service--title">
            <h6>Boarding</h6>
            <Link to="service_book.html">
              <button className="btn btn--secondary">Book Now</button>
            </Link>
            <Link to="https://pawpartner.com/throw-me-a-bone---525-w-52nd-st">
              <button className="btn btn--primary">Book LIC</button>
            </Link>
          </div>
          <h5>Monday - Sunday / 24 hours</h5>
          <p>
            Our overnight boarding service offers a convenient solution for our
            more active dogs. Each 24 hour stay includes daycare, relief walks,
            all feedings and daily photos. Live play cam is also available
            during daycare hours to check in when you would like and see how
            your Pet is doing.
          </p>
          <div className="service--content row">
            <div className="service--content__info boarding l-12 m-12">
              <div className="service--content__price">
                <h6>Boarding *</h6>
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
  );
};

export default ServiceBoarding;