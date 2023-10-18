import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutSection from "./AboutSection";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";

const About = () => {
  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/84kM03L/about-bg-1.jpg"
        content="Bạn có thể tin ở chúng tôi"
        des="Chăm sóc thú cưng là một cách tiết kiệm chi phí để xoa dịu ít căng thẳng nhất cho động vật của bạn bằng cách cho phép thú cưng của bạn duy trì nhiều thói quen hàng ngày nhất có thể"
      />
      <AboutSection />
      <Cart />
      <CartIcon />
    </main>
  );
};

export default About;
