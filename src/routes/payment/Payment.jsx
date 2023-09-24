// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../../components/HeroSection";
import SectionPay from "./SectionPay";
import CartIcon from "../../components/CartIcon";

const Payment = () => {
  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/wKcTxM6/payment-bg-1.jpg"
        content=" For your pet’s all natural life"
        des=" You can’t buy happiness but you can buy Husky and that’s pretty
              much it"
      />
      <SectionPay />
    </main>
  );
};

export default Payment;
