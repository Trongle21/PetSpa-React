import React from "react";
import HeroSection from "../../components/HeroSection";
import ContactSection from "./ContactSection";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";

const Contact = () => {
  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/mDFGRFh/contact-bg-1.jpg"
        content="We enjoy our work"
        des="You can’t buy happiness but you can buy lil doggo and that’s pretty much it"
      />
      <ContactSection />
      <CartIcon />
      <Cart />
    </main>
  );
};

export default Contact;
