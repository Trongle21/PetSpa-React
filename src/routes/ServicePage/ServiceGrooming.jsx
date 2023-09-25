import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

const ServiceGrooming = () => {
  return (
    <div className="service--blog service-2 service--padding">
      <div className="service--wrapper row">
        <div className="service--image l-2 m-2">
          <img src="https://i.ibb.co/bgymvJT/service-2.webp" alt="" />
        </div>
        <div className="service--des l-10 m-10">
          <div className="service--title">
            <h6>Grooming</h6>
            <Link to="service_book.html">
              <button className="btn btn--secondary">Book Now</button>
            </Link>
          </div>
          <h5>Monday - Sunday / 8:00am - 6:00pm</h5>
          <p>
            We offer a full range of spa and grooming services. All grooming
            options include a complete organic and hypoallergenic bath as well
            as detailed nose-to-tail attention. Pricing may vary due to size,
            the condition of the coat, matting, knots and the length of hair.
          </p>
          <div className="service--content row">
            <div className="service--content__info luxury--bath l-6 m-6">
              <div className="service--content__price">
                <h6>The Luxury Bath</h6>
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
            <div className="service--content__info full--groom l-6 m-6">
              <div className="service--content__price">
                <h6>The Full Groom</h6>
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
  );
};

export default ServiceGrooming;
