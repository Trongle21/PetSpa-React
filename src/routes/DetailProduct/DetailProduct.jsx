import React from "react";
import useProductContext from "../../hooks/useProductContext";
import HeroSection from "../../components/HeroSection";
import SectionDetail from "./SectionDetail";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";

const DetailProduct = () => {
  const [state] = useProductContext();

  const { loading, error } = state;

  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/kmKngmQ/detail-product-bg-1.jpg"
        content="Adopt a cat, save the world"
        des="For your furry or flying or finned friends."
      />
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <SectionDetail />
      )}
      <CartIcon />
      <Cart />
    </main>
  );
};

export default DetailProduct;
