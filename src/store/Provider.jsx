import { useReducer, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import AppContext from "../context/AppContext";
import reducer, { initState } from "./reducer";
import useProductContext from "../hooks/useProductContext";
import { actions } from ".";

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    let ignore = false;
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://api-spa-pet-react.vercel.app/products"
        );
        if (!res.ok) {
          throw new Error("not found data");
        }
        const data = await res.json();  
        if (!ignore) dispatch(actions.getDataSuccess(data));
      } catch (error) {
        if (!ignore) dispatch(actions.getDataFailed(error));
      }
    };

    getProducts();
    return () => {
      ignore = true;
    };
  }, [dispatch]);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state] = useProductContext();

  const { products } = state;

  const findProductById = (id) => {
    return products.find((product) => product.id === +id);
  };

  return (
    <AppContext.Provider value={{ findProductById }}>
      {children}
    </AppContext.Provider>
  );
};

export { ProductProvider, AppProvider };
