import React from "react";
import useProductContext from "../../hooks/useProductContext";
import { useParams } from "react-router-dom";
import HeroSectionDetailProduct from "./HeroSectionDetailProduct";
import SectionDetail from "./SectionDetail";

const DetailProduct = () => {
  return (
    <main>
      <HeroSectionDetailProduct />
      <SectionDetail />
    </main>
  );
};

export default DetailProduct;
