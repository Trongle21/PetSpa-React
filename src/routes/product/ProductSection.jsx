import React from "react";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import Cart from "../../components/Cart";
import CartIcon from "../../components/CartIcon";
import useProductContext from "../../hooks/useProductContext";
import PathLink from "../../components/PathLink";
import useAppContext from "../../hooks/useAppContext";

const ProductSection = () => {
  const [state, dispatch] = useProductContext();

  const { isShowCart } = useAppContext();

  const { loading, error } = state;

  return (
    <section className="product--section">
      <div className="container">
        <PathLink content="Product" />
        <div className="line"></div>
        <div className="product--section__wrapper">
          {!isShowCart && <CartIcon />}
          <ProductInfo />
          {loading ? (
            <div>Loading ...</div>
          ) : error ? (
            <div>Không tìm thấy dữ liệu</div>
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
