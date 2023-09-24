// eslint-disable-next-line no-unused-vars
import React from "react";
import useAppContext from "../../hooks/useAppContext";
import useProductContext from "../../hooks/useProductContext";

const PayInfo = () => {
  const { productInCart, totalProductPrice } = useAppContext();

  console.log(productInCart);

  return (
    <div className="section--pay__info l-4 m-4 c-12">
      <div className="section--pay__list">
        {productInCart.map((product, index) => (
          <div className="section--pay__info--product" key={index}>
            <div
              className="pay--image"
              style={{ backgroundImage: `url(${product.product.thumbnail})` }}
            >
              <p>{product.quantity}</p>
            </div>
            <div className="pay--des">
              <h4>{product.product.name}</h4>
            </div>
            <div className="pay--price">
              <span>$ </span>
              {product.product.price}
            </div>
          </div>
        ))}
      </div>
      <div className="section--pay__info--total">
        <h5>Total</h5>
        <h4>
          <span>$</span>
          <p>{totalProductPrice}</p>
        </h4>
      </div>
    </div>
  );
};

export default PayInfo;