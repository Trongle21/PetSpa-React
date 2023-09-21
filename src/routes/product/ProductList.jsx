// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import useProductContext from "../../hooks/useProductContext";
import { actions } from "../../store";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [state, dispatch] = useProductContext();

  const { products } = state;

 

  const handleAddProductToCart = (id, quantity = 1) => {
    dispatch(actions.addProductToCart(id, quantity));
  };

  return (
    <div className="product--list">
      {products.map((product, index) => (
        <div className="product--item l-3 m-6 c-11" key={product.id}>
          <div className="product--item__wrapper">
            <div className="product--item__wrapper">
              <Link
                to={`/product/${product.id}`}
                className="product--item__image"
                style={{ backgroundImage: `url(${product.thumbnail})` }}
              ></Link>
              <div className="product--item__info text-center">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h5>
                  <span>$</span>
                  {product.price}
                </h5>
              </div>
            </div>
            <div className="product--item__btn">
              <button
                className="btn btn--primary"
                onClick={() => handleAddProductToCart(product.id)}
              >
                Add To Cart
              </button>
              {/* <Button className="btn btn--primary" onClick={() => handleAddProductToCart(product.id)} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
