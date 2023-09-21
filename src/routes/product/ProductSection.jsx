// eslint-disable-next-line no-unused-vars
import React from "react";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import Cart from "../../components/Cart";
import CartIcon from "../../components/CartIcon";
import useProductContext from "../../hooks/useProductContext";
import PathLink from "../../components/PathLink";

const ProductSection = () => {
  const [state] = useProductContext();

  const { loading, error } = state;

  return (
    <section className="product--section">
      <div className="container">
      <PathLink content="Productfff" />
        <div className="line"></div>
        <div className="product--section__wrapper">
          <CartIcon />
          <ProductInfo />
          {loading ? (
            <div>Loading</div>
          ) : error ? (
            <div>Error</div>
          ) : (
            <ProductList />
          )}
          <Cart />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
