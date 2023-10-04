import { useReducer, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import AppContext from "../context/AppContext";
import reducer, { initState } from "./reducer";
import useProductContext from "../hooks/useProductContext";
import { actions } from ".";

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

const AppProvider = ({ children }) => {
  const [isShowHeader, setIsShowHeader] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowPackage, setIsShowPackage] = useState(false);
  const [isShowNavBar, setIsShowNavBar] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowServiceBook, setIsShowServiceBook] = useState(false);

  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [state, dispatch] = useProductContext();
  const { products } = state;

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;

  const endOffset = itemOffset + itemsPerPage;

  const currentProducts = products.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        const showHeader = true;
        setIsShowHeader(showHeader);
      } else {
        const showHeader = false;
        setIsShowHeader(showHeader);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenCart = () => {
    const openCart = true;
    setIsShowCart(openCart);
  };

  const handleCloseCart = () => {
    const closeCart = false;
    setIsShowCart(closeCart);
  };

  const handleShowPackage = () => {
    setIsShowPackage(!isShowPackage);
  };

  const handleShowNavBar = () => {
    setIsShowNavBar(!isShowNavBar);
  };

  const handleShowSearch = () => {
    setIsShowSearch(!isShowSearch);
  };

  const handleShowServiceBook = () => {
    setIsShowServiceBook(!isShowServiceBook);
  };

  const findProductById = (id) => {
    return products.find((product) => product.id === +id);
  };

  const handleAddProductToCart = ({ productId, quantity = 1 }) => {
    dispatch(actions.addProductToCart(productId, quantity));
  };
  const productInCart = state.productCart.map((product) => ({
    product: findProductById(product.productId),
    quantity: product.quantity,
  }));

  const lengthProductCart = productInCart.length;

  const handleDeleteProduct = (id) => {
    dispatch(actions.deleteProduct(id));
  };

  useEffect(() => {
    setTotalProductPrice(
      productInCart.reduce(
        (total, product) => total + product.product.price * product.quantity,
        0
      )
    );
  }, [productInCart]);

  const handleTakeInfoUser = (data) => {
    console.log(data);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        isShowHeader,
        isShowCart,
        isShowPackage,
        isShowNavBar,
        isShowSearch,
        productInCart,
        isShowServiceBook,
        lengthProductCart,
        totalProductPrice,
        findProductById,
        onShowPackage: handleShowPackage,
        onOpenCart: handleOpenCart,
        onCloseCart: handleCloseCart,
        onShowNavBar: handleShowNavBar,
        onShowSearch: handleShowSearch,
        onShowServiceBook: handleShowServiceBook,
        onAddProductToCart: handleAddProductToCart,
        onDeleteProduct: handleDeleteProduct,
        onPageClick: handlePageClick,
        onTakeInfoUser: handleTakeInfoUser,
        currentProducts,
        pageCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { ProductProvider, AppProvider };
