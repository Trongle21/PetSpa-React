// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import useProductContext from "../hooks/useProductContext";
import { actions } from "../store";

const Cart = () => {
  const { isShowCart, productInCart, totalProductPrice } = useAppContext();

  const [state, dispatch] = useProductContext();

  const classCart = isShowCart ? "show--cart" : "product--cart";

  return (
    <>
      <div className={`product--cart ${classCart}`}>
        <div className="product--cart__info">
          <div className="product--cart__info--user">
            <div
              className="user--image"
              style={{
                backgroundImage: `url(${"https://i.ibb.co/QCRGk2z/Kaio-In-the-world-of-fantasy-1.png"})`,
              }}
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
          <div className="product--cart__pay">
            {productInCart.map((product) => (
              <div
                className="product--cart__pay--wrapper"
                key={product.product.id}
              >
                <div
                  className="product--cart__pay--image"
                  style={{
                    backgroundImage: `url(${product.product.thumbnail})`,
                  }}
                ></div>
                <div className="product--cart__pay--info">
                  <h3>{product.product.name}</h3>
                  <h5>
                    <span>$</span> {product.product.price}
                  </h5>
                  <div className="product--quantity">
                    <button
                      className="quantity decrease"
                      onClick={() =>
                        dispatch(actions.decreaseProduct(product.product.id))
                      }
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      className="quantity increase"
                      onClick={() =>
                        dispatch(actions.increaseProduct(product.product.id))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="product--item__delete">
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="product--cart__btn">
          <a>
            <button className="btn btn--secondary ">Place An Order</button>
          </a>
          <div className="product--cart__total">
            <h4>Total</h4>
            <span>${totalProductPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
