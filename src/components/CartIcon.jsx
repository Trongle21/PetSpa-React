// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import useAppContext from "../hooks/useAppContext";

const CartIcon = () => {
  const { onShowCart } = useAppContext();

  return (
    <div className="cart--icon" onClick={onShowCart}>
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="quantity--product"></div>
    </div>
  );
};

export default CartIcon;
