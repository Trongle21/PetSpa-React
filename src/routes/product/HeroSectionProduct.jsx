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
          <div className="content--hero__name">Chúng tôi tận hưởng công việc của chúng tôi</div>
          <div className="content--hero__des"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionProduct;
