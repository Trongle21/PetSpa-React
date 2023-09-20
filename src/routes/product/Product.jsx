// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSectionProduct from "./HeroSectionProduct";
import ProductSection from "./ProductSection";
import Pagination from "./Pagination";

const Product = () => {
  return (
    <main>
      <HeroSectionProduct />
      <ProductSection />
      <Pagination />
    </main>
  );
};

export default Product;
