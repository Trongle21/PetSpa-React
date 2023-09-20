// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductInfo from "./ProductInfo";
import ProductCart from "./ProductCart";
import ProductList from "./ProductList";

const ProductSection = () => {
  return (
    <section className="product--section">
      <div className="container">
        <div className="path--link padding--top">
          <a href="index.html">Home</a>
          <i className="fa-solid fa-chevron-right"></i>
          <h6>Product</h6>
        </div>
        <div className="line"></div>
        <div className="product--section__wrapper">
          <div className="cart--icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="quantity--product"></div>
          </div>
          <ProductInfo />
          <ProductList />
          <ProductCart />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
