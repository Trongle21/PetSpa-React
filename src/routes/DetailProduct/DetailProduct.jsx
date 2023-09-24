// eslint-disable-next-line no-unused-vars
import React from "react";
import useProductContext from "../../hooks/useProductContext";
import HeroSection from "../../components/HeroSection";
import SectionDetail from "./SectionDetail";

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
    </main>
  );
};

export default DetailProduct;
