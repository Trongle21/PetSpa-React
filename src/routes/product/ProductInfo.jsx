// eslint-disable-next-line no-unused-vars
import React from "react";

const ProductInfo = () => {
  return (
    <div className="product--info">
      <h4>Cat and Dog</h4>
      <div className="product--search">
        <input className="search--product" type="text" placeholder="search" />
      </div>
      <div className="product--section__search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <select name="" id="" className="product--info__select">
          <option value="cat and dog">Cat and Dog</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>
    </div>
  );
};

export default ProductInfo;
