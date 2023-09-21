// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServiceSection />

      <section className="service-prices--section container-padding">
        <div
          className="service-prices--section__img"
          // style="background-image: url('./src/image/dog-bg_2.png')"
        ></div>
        <div className="container">
          <h4 data-aos="fade-down" className="heading-lg text-center fw-800">
            Special Package
          </h4>
          <h2
            data-aos="fade-down"
            className="heading-sm text-center margin-bottom"
          >
            We offer special package just for you and your little family
          </h2>
          <div
            className="pricing--plan_list padding-bottom row"
            data-aos="zoom-in-up"
          ></div>
        </div>
      </section>
      <section className="team-member--section container-padding">
        <div
          className="team-member--section__img"
          // style="background-image: url('')"
        ></div>
        <div className="container">
          <h4 data-aos="fade-down" className="heading-lg text-center fw-800">
            Team Member
          </h4>
          <h2
            data-aos="fade-down"
            className="heading-sm text-center margin-bottom"
          >
            Our store is hard-working employees
          </h2>
          <div
            className="team-member--list padding-bottom row"
            data-aos="zoom-in-up"
          ></div>
        </div>
      </section>

      <section className="gift--section container-padding">
        <div
          className="gift--section__img"
          // style="background-image: url('')"
        ></div>
        <div className="container padding-bottom">
          <h4 data-aos="fade-down" className="heading-lg text-center fw-800">
            Contact Us{" "}
          </h4>
          <h2
            data-aos="fade-down"
            className="heading-sm text-center margin-bottom"
          >
            Our store is hard-working employees
          </h2>
          <div className="gift--section__wrapper row" data-aos="zoom-in">
            <div className="gift--section__wrapper--info l-6 m-6">
              <h1>Get Contact Us!</h1>
              <p>
                Contact our customer services and get your special gift for the
                first package purchase
              </p>
              <a href="">
                <button className="btn btn--primary">Contact Us</button>
              </a>
            </div>
            <div
              className="gift--section__wrapper--image l-6 m-6"
              // style="background-image: url('./src/image/gift_1.png');"
            ></div>
          </div>
        </div>
      </section>
      <CartIcon />
      <Cart />
    </main>
  );
};

export default Home;
