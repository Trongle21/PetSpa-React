import React from "react";
import useAppContext from "../hooks/useAppContext";

const CartIcon = () => {
  const { onOpenCart, lengthProductCart } = useAppContext();

  return (
    <div className="cart--icon" onClick={onOpenCart}>
      <i className="fa-solid fa-cart-shopping"></i>
      <div className="quantity--product">
        {lengthProductCart > 0 ? (
          <div className="number">{lengthProductCart}</div>
        ) : null}
      </div>
    </div>
  );
};

export default CartIcon;
