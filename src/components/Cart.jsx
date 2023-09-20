// eslint-disable-next-line no-unused-vars
import React from "react";

const ProductCart = () => {
  return (
    <div className="product--cart">
      <div className="product--cart__info">
        <div className="product--cart__info--user">
          <div
            className="user--image"
            // style="background-image: url('./src/image/Kaio_In_the_world_of_fantasy\(1\).png');"
          ></div>
          <h6>Kaiosuke</h6>
        </div>
        <div className="product--cart__info--close">
          <i>
            {" "}
            <i className="fa-solid fa-xmark"></i>
          </i>
        </div>
      </div>
      <div className="cart--wrapper">
        <div className="product--cart__pay"></div>
      </div>
      <div className="product--cart__btn">
        <a>
          <button className="btn btn--secondary ">Place An Order</button>
        </a>
        <div className="product--cart__total">
          <h4>Total</h4>
          <span>0 $</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
