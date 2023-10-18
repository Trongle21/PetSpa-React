import React from "react";
import ProductSection from "./ProductSection";
import HeroSection from "../../components/HeroSection";
import ReactPaginate from "react-paginate";
import useAppContext from "../../hooks/useAppContext";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Product = () => {
  const { onPageClick, pageCount } = useAppContext();
  return (
    <main>
      <HeroSection
        backgroundImg="https://i.ibb.co/njr1t1X/product-bg-1.jpg"
        content="Chúng tôi tận hưởng công việc của chúng tôi"
        des="Đây là một lựa chọn tuyệt vời để nhốt thú cưng của bạn vào chuồng,thời gian để đi vệ sinh và vui chơi"
      />
      <ProductSection />
      <div className="pagination--product">
        <div className="pagination--product">
          <ReactPaginate
            breakAriaLabels="..."
            nextLabel={<GrFormNext />}
            onPageChange={onPageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<GrFormPrevious />}
            renderOnZeroPageCount={null}
            pageClassName="pagination--item"
            activeClassName="active"
            pageLinkClassName="pagination--item__link"
          />
        </div>
      </div>
    </main>
  );
};

export default Product;
