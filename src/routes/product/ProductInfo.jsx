import React from "react";
import useAppContext from "../../hooks/useAppContext";
import data from "../../data.json";
import useProductContext from "../../hooks/useProductContext";
import { actions } from "../../store";

const ProductInfo = () => {
  const [state, dispatch] = useProductContext();

  const { isShowSearch, onShowSearch, inputSearch } = useAppContext();

  const handleSearchProduct = (name) => {
    dispatch(actions.searchProducts(name));
    dispatch(actions.filterProductsBySearch(name));
  };

  const handleSelectedTypesPet = (type) => {
    dispatch(actions.selectPetTypes(type));
    dispatch(actions.searchProducts(""));
  };

  const selectedPetTypes = data["selectedPetTypes"];
  return (
    <div className="product--info">
      <h4>Cat and Dog</h4>
      <div className={`product--search ${isShowSearch ? "show" : ""}`}>
        <input
          className="search--product"
          type="text"
          value={inputSearch}
          onChange={(e) => handleSearchProduct(e.target.value)}
          placeholder="search..."
        />
      </div>
      <div className="product--section__search">
        <i
          className={`fa-solid ${
            isShowSearch ? "fa-solid fa-xmark show" : "fa-magnifying-glass "
          }`}
          onClick={onShowSearch}
        ></i>
        <select
          className="product--info__select"
          onChange={(e) => handleSelectedTypesPet(e.target.value)}
        >
          {selectedPetTypes.map((type, index) => (
            <option value={type.value} key={index}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductInfo;
