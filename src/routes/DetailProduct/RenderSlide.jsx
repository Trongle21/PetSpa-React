import React, { useEffect } from "react";
import useProductContext from "../../hooks/useProductContext";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import { Link } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

const RenderSlide = () => {
  const [state] = useProductContext();
  const { products } = state;
  const { onAddProductToCart, onOpenCart } = useAppContext();

  const handleAddProductToCart = (id) => {
    onAddProductToCart({ productId: id, quantity: 1 });
  };

  const handleOpenCart = () => {
    onOpenCart();
  };

  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }, []);

  return (
    <div className="owl-carousel owl-theme slide">
      {products.map((product) => (
        <div className="item" key={product.id}>
          <div className="product--item" key={product.id}>
            <div className="product--item__wrapper">
              <Link
                to={`/product/${product.id}`}
                className="product--item__image"
                style={{
                  backgroundImage: `url(${product.thumbnail})`,
                }}
              ></Link>
              <div className="product--item__info text-center">
                <h3>{product.name}</h3>
                <p>${product.description}</p>
                <h5>
                  <span>$</span>
                  {product.price}
                </h5>
              </div>
              <div className="product--item__btn">
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    handleAddProductToCart(product.id), handleOpenCart();
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderSlide;
