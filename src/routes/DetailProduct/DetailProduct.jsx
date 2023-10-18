import React from "react";
import useProductContext from "../../hooks/useProductContext";
import HeroSection from "../../components/HeroSection";
import SectionDetail from "./SectionDetail";
import CartIcon from "../../components/CartIcon";
import Cart from "../../components/Cart";

const DetailProduct = () => {
  const [state] = useProductContext();

  const { loading, error } = state;

  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/kmKngmQ/detail-product-bg-1.jpg"
        content="Nhận nuôi một chú mèo, cứu thế giới"
        des="Dành cho những người bạn lông xù, biết bay hoặc bị phạt của bạn."
      />
      {loading ? (
        <div>Đang load</div>
      ) : error ? (
        <div>Có lỗi</div>
      ) : (
        <SectionDetail />
      )}
      <CartIcon />
      <Cart />
    </main>
  );
};

export default DetailProduct;
