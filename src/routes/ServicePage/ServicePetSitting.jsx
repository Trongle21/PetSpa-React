import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";

const ServicePetSitting = () => {
  return (
    <div className="service--blog service-4 service--padding">
      <div className="service--wrapper row">
        <div className="service--image l-2 m-2">
          <img src="https://i.ibb.co/q7XqphM/service-4.png" alt="" />
        </div>
        <div className="service--des l-10 m-10">
          <div className="service--title">
            <h6>Pet Sitting</h6>
            <Link to="service_book.html">
              <button className="btn btn--secondary">Book Now</button>
            </Link>
          </div>
          <h5>Monday - Sunday / 8:00am - 6:00pm</h5>
          <p>
            For cats and puppies. Each 30-minute visit includes feeding/fresh
            water, litter/crate maintenance, and indoor playtime. Relief walks
            can be provided for puppies upon request.
          </p>
          <div className="service--content row">
            <div className="service--content__info pet--sitting l-12 m-12">
              <div className="service--content__price">
                <h6>Pet Sitting</h6>
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
  );
};

export default ServicePetSitting;
