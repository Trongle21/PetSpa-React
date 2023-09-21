// eslint-disable-next-line no-unused-vars
import React from "react";
import useAppContext from "../../hooks/useAppContext";
import Cart from "../../components/Cart";
import CartIcon from "../../components/CartIcon";
import { useParams } from "react-router-dom";
import PathLink from "../../components/PathLink";

const SectionDetail = () => {
  const { productId } = useParams();
  const { findProductById } = useAppContext();
  const detailProduct = findProductById(productId);

  return (
    <div className="section--detail__padding">
      <Cart />
      <div className="container">
        <CartIcon />
        <PathLink />
        <div className="line"></div>
        <div className="section--detail__product--wrapper">
          <section className="section--detail__product"></section>
        </div>
        <section className="section--product__recommend">
          <h2 data-aos="fade-down">WE ALSO RECOMMEND</h2>
          <div className="line"></div>
          <div className="section--product__slide">
            <div className="owl-carousel owl-theme slide"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionDetail;
