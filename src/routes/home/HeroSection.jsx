// eslint-disable-next-line no-unused-vars
import React from "react";
import data from "../../data.json";

const homeHero = data["homeHero"];

const HeroSection = () => {
  const handlePrevImg = () => {
    const lists = document.querySelectorAll(".hero--content__img");
    const heroContent = document.querySelector(".hero--content");
    const newImg = lists[lists.length - 1];

    heroContent.prepend(newImg);
  };

  const handleNextImg = () => {
    const lists = document.querySelectorAll(".hero--content__img");
    const heroContent = document.querySelector(".hero--content");
    const newImg = lists[0];
    heroContent.appendChild(newImg);
  };

  return (
    <section className="hero--section">
      <div className="hero--section__container">
        <div className="hero--content">
          {homeHero.map((img, index) => (
            <div
              className="hero--content__img"
              key={index}
              style={{ backgroundImage: `url(${img.image})` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevImg}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={handleNextImg}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
