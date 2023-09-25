import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";
import ServicePrice from "./ServicePrice";
import TeamMember from "./TeamMember";
import GiftSection from "./GiftSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <ServicePrice />
      <TeamMember />
      <GiftSection />
      <CartIcon />
      <Cart />
    </main>
  );
};

export default Home;
