// eslint-disable-next-line no-unused-vars
import React from "react";
const ServiceSection = () => {
  return (
    <section className="service--section container-padding">
      <div
        className="service--section__img"
        // style="background-image: url('./src/image/cat-bg.png')"
      ></div>
      <div className="container">
        <h4 data-aos="fade-down" className="heading-lg text-center fw-800">
          What Can We Do
        </h4>
        <h2
          data-aos="fade-down"
          className="heading-sm text-center margin-bottom"
        >
          We lock after little your family, we ensure that we will give the best
          treat for your little family
        </h2>
        <div
          className="service--section__list padding-bottom row"
          data-aos="fade-up"
        ></div>
      </div>
    </section>
  );
};

export default ServiceSection;
