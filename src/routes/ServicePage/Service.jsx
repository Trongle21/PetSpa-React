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
        content="Chúng tôi cũng yêu thú cưng"
        des=" Thú cưng của bạn sẽ có môi trường như ở nhà, mùi hương quen thuộc,
               điểm tham quan và âm thanh cũng như thức ăn và đồ ăn vặt"
      />
      <ServiceSection />
      <CartIcon />
      <Cart />
    </main>
  );
};

export default Service;
