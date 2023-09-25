import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";

const useProductContext = () => {
  const [state, dispatch] = useContext(ProductContext);

  return [state, dispatch];
};

export default useProductContext;
