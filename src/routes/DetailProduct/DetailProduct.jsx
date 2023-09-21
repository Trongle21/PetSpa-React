// eslint-disable-next-line no-unused-vars
import React from "react";
import useProductContext from "../../hooks/useProductContext";
import HeroSectionDetailProduct from "./HeroSectionDetailProduct";
import SectionDetail from "./SectionDetail";

const DetailProduct = () => {
  const [state] = useProductContext();

  const { loading, error } = state;

  return (
    <main>
      <HeroSectionDetailProduct />
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
