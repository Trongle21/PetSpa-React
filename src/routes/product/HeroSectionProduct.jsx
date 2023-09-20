// eslint-disable-next-line no-unused-vars
import React from "react";

const HeroSectionProduct = () => {
  return (
    <section className="section--hero">
      <div
        className="section--hero__image"
        style={{
          backgroundImage: `url("https://i.ibb.co/njr1t1X/product-bg-1.jpg")`,
        }}
      >
        <div className="section--hero__wrapper">
          <div className="content--hero__name">We enjoy our work</div>
          <div className="content--hero__des">
            It is an excellent option for kenneling your pet, different turnout
            times for potty and play, and not to mention all of this stress is
            in addition to not having you around
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionProduct;
