import React from "react";
import HeroSection from "../../components/HeroSection";
import ServiceSection from "./ServiceSection";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";

const Service = () => {
  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/R3pFqf8/service-bg-1.jpg"
        content="We love pets too"
        des=" Your pet will have the environment of home, familiar smells,
              sights, and sounds, as well as food and treats"
      />
      <ServiceSection />
      <CartIcon />
      <Cart />
    </main>
  );
};

export default Service;
