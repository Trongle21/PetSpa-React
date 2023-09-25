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
          <div className="content--hero__des"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionProduct;
