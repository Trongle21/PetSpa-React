import React from "react";
import HeroSection from "../../components/HeroSection";
import SectionPay from "./SectionPay";

const Payment = () => {
  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/wKcTxM6/payment-bg-1.jpg"
        content="Vì cuộc sống tự nhiên của thú cưng của bạn"
        des="Bạn không thể mua được hạnh phúc nhưng bạn có thể mua được Husky và điều đó thật tuyệt vời
            nhiều lắm"
      />
      <SectionPay />
    </main>
  );
};

export default Payment;
