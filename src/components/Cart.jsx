import React, { useEffect, useState } from "react";
import useAppContext from "../hooks/useAppContext";
import useProductContext from "../hooks/useProductContext";
import { Link } from "react-router-dom";
import { actions } from "../store";
import Button from "./Button";

const Cart = () => {
  const {
    isShowCart,
    onCloseCart,
    productInCart,
    totalProductPrice,
    onDeleteProduct,
  } = useAppContext();

  const [state, dispatch] = useProductContext();
  const handleCloseCart = () => {
    onCloseCart();
  };

  const handleDeleteProduct = (id) => {
    const isDelete = window.confirm(
      "Bạn chắc chắn muốn xóa sản phẩm này khỏi cửa hàng"
    );
    if (isDelete) {
      onDeleteProduct(id);
    }
  };

  const handleCheckProduct = () => {
    if (productInCart.length < 1) {
      window.alert("Bạn không có sản phẩm trong giỏ hàng");
    }
  };

  // useEffect(() => {
  //   if (isShowNavBar) {
  //     document.addEventListener("click", () => {
  //       onShowNavBar();
  //     });
  //   }
  // });

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
          <div className="product--cart__info--close" onClick={handleCloseCart}>
            <i>
              {" "}
              <i className="fa-solid fa-xmark"></i>
            </i>
          </div>
        </div>
        <div className="cart--wrapper">
          <div className="product--cart__pay">
            {productInCart.length < 1 ? (
              <div className="no-product">Giỏ hàng của bạn đang trống!</div>
            ) : (
              <>
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
                        <Button
                          className="quantity decrease"
                          content="-"
                          onClick={() =>
                            dispatch(
                              actions.decreaseProduct(product.product.id)
                            )
                          }
                        />
                        <p>{product.quantity}</p>

                        <Button
                          className="quantity increase"
                          content="+"
                          onClick={() =>
                            dispatch(
                              actions.increaseProduct(product.product.id)
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="product--item__delete">
                      <button
                        onClick={() => handleDeleteProduct(product.product.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="product--cart__btn">
          <Link to={productInCart.length > 0 ? "/payment" : null}>
            <Button
              className="btn btn--secondary"
              onClick={handleCheckProduct}
              content="Place an order"
            />
          </Link>
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
