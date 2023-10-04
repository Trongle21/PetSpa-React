import React from "react";
import useAppContext from "../../hooks/useAppContext";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import useProductContext from "../../hooks/useProductContext";

const ProductList = () => {
  const [state, dispatch] = useProductContext();

  const { loading, error } = state;

  const { onAddProductToCart, onOpenCart, currentProducts } = useAppContext();

  const handleAddProductToCart = (id) => {
    onAddProductToCart({ productId: id, quantity: 1 });
  };

  const handleShowCart = () => {
    onOpenCart();
  };

  return (
    <div className="product--list">
      {currentProducts && currentProducts.length === 0 ? (
        <div>Không tìm thấy sản phẩm</div>
      ) : (
        currentProducts &&
        currentProducts.map((product) => (
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
                <Button
                  className="btn btn--primary"
                  onClick={() => {
                    handleAddProductToCart(product.id);
                    handleShowCart();
                  }}
                  content="Add To Cart"
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
