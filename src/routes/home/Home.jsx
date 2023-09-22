// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";
import useAppContext from "../../hooks/useAppContext";
import ServicePrice from "./ServicePrice";
import TeamMember from "./TeamMember";
import GiftSection from "./GiftSection";

const Home = () => {
  const { isShowCart } = useAppContext();
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <ServicePrice />
      <TeamMember />
      <GiftSection />
      {!isShowCart && <CartIcon />}
      <Cart />
    </main>
  );
};

export default Home;
