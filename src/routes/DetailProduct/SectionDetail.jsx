// eslint-disable-next-line no-unused-vars
import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { useParams } from "react-router-dom";

const SectionDetail = () => {
  const { productId } = useParams();
  const { findProductById } = useAppContext();
  const detailProduct = findProductById(productId);

  console.log(detailProduct && detailProduct);

  let products;

  if (detailProduct) {
    products = detailProduct;
    console.log(products.name);
  }
  return;
};

export default SectionDetail;
