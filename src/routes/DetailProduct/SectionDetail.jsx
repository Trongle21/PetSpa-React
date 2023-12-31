import React, { useEffect } from "react";
import useAppContext from "../../hooks/useAppContext";
import Cart from "../../components/Cart";
import CartIcon from "../../components/CartIcon";
import { useParams } from "react-router-dom";
import PathLink from "../../components/PathLink";
import RenderSlide from "./RenderSlide";

const SectionDetail = () => {
  const { productId } = useParams();
  const { findProductById, onAddProductToCart, onOpenCart } = useAppContext();
  const detailProduct = findProductById(productId);

  const handleAddProductToCart = (id) => {
    onAddProductToCart({ productId: id, quantity: 1 });
  };

  const handleOpenCart = () => {
    onOpenCart();
  };

  useEffect(() => {
    let changeImg = document.querySelector(".detail--product__image--main");
    let imgMain2 = document.querySelector(".img--main-2");
    document
      .querySelectorAll(".product--image__small--item")
      .forEach((picture) => {
        picture.addEventListener("click", (e) => {
          changeImg.style.backgroundImage = e.target.style.backgroundImage;
          imgMain2.style.backgroundImage = e.target.style.backgroundImage;
        });
      });

    let zoom = document.querySelector(".zoom");
    let imgZoom = document.querySelector("#imgZoom");
    if ((zoom, imgZoom)) {
      zoom.addEventListener("mousemove", (event) => {
        imgZoom.style.opacity = 1;
        let positionPx = event.x - zoom.getBoundingClientRect().left;
        let positionX = (positionPx / zoom.offsetWidth) * 100;

        let positionPy = event.y - zoom.getBoundingClientRect().top;
        let positionY = (positionPy / zoom.offsetHeight) * 100;

        let transformX = -(positionX - 50) / 3.5;
        let transformY = -(positionY - 50) / 3.5;

        imgZoom.style.setProperty("--zoom-x", positionX + "%");
        imgZoom.style.setProperty("--zoom-y", positionY + "%");
        imgZoom.style.transform = `
                scale(1.5)
                translateX(${transformX}%) translateY(${transformY}%)
            `;
      });

      zoom.addEventListener("mouseout", () => {
        imgZoom.style.opacity = 0;
      });
    }
  }, []);

  return (
    <div className="section--detail__padding">
      <Cart />
      <div className="container">
        <CartIcon />
        <PathLink content="Detail Product" />
        <div className="line"></div>
        <div className="section--detail__product--wrapper">
          <section className="section--detail__product">
            <div className="section--detail__product--warper row">
              <div className="detail--product__image l-5 m-5 c-12">
                <div className="detail--product__image--large zoom">
                  <div
                    id="myimage"
                    className="detail--product__image--main"
                    style={{
                      backgroundImage: `url(${detailProduct.thumbnail})`,
                    }}
                  ></div>
                  <div
                    id="imgZoom"
                    className="img--main-2"
                    style={{
                      backgroundImage: `url(${detailProduct.thumbnail})`,
                    }}
                  ></div>
                </div>
                <div className="detail--product__image--small">
                  <div
                    className="product--image__small--item"
                    style={{
                      backgroundImage: `url(${detailProduct.images[0]})`,
                    }}
                  ></div>
                  <div
                    className="product--image__small--item secondary"
                    style={{
                      backgroundImage: `url(${detailProduct.images[1]})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="detail--product__info l-7 m-7 c-12">
                <div className="detail--product__info--wrapper">
                  <h2>{detailProduct.description}</h2>
                  <h3>{detailProduct.name}</h3>
                  <h4>
                    <span> $</span>
                    {detailProduct.price}
                  </h4>
                  <div className="detail--product__btn">
                    <button
                      className="btn btn--primary"
                      onClick={() => {
                        handleAddProductToCart(detailProduct.id),
                          handleOpenCart();
                      }}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                  <div className="detail--product__info--content">
                    <h2>Mô tả</h2>
                    <div className="line"></div>
                    <p>{detailProduct.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="section--product__recommend">
          <h2>CHÚNG TÔI CŨNG KHUYẾN NGHỊ</h2>
          <div className="line"></div>
          <div className="section--product__slide">
            <RenderSlide />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionDetail;
