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
        content="We enjoy our work"
        des="  It is an excellent option for kenneling your pet, different turnout
            times for potty and play, and not to mention all of this stress is
            in addition to not having you around"
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
