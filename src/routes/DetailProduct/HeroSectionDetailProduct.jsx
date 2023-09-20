// eslint-disable-next-line no-unused-vars
import React from "react";

const HeroSectionDetailProduct = () => {
  return (
    <section className="section--hero">
      <div
        className="section--hero__image"
        style={{
          backgroundImage: `url("https://i.ibb.co/kmKngmQ/detail-product-bg-1.jpg")`,
        }}
      >
        <div className="section--hero__wrapper">
          <div className="content--hero__name">Adopt a cat, save the world</div>
          <div className="content--hero__des">
            For your furry or flying or finned friends.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionDetailProduct;
