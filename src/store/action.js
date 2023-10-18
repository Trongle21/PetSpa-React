import {
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  DELETE_PRODUCT,
  SELECTED_PET_TYPES,
  SEARCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SEARCH,
  SELECTED_PAY_METHOD,
} from "./contain";

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailed = (payload) => {
  return {
    type: GET_DATA_FAILED,
    payload,
  };
};

const selectPetTypes = (payload) => {
  return {
    type: SELECTED_PET_TYPES,
    payload,
  };
};

const searchProducts = (payload) => {
  return {
    type: SEARCH_PRODUCTS,
    payload,
  };
};

const filterProductsBySearch = (payload) => {
  return {
    type: FILTER_PRODUCTS_BY_SEARCH,
    payload,
  };
};

  const addProductToCart = (productId, quantity = 1) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

const decreaseProduct = (payload) => {
  return {
    type: DECREASE_PRODUCT,
    payload,
  };
};

const increaseProduct = (payload) => {
  return {
    type: INCREASE_PRODUCT,
    payload,
  };
};

const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};

const selectedPayMethod = (payload) => {
  return {
    type: SELECTED_PAY_METHOD,
    payload,
  };
};

export {
  getDataSuccess,
  getDataFailed,
  selectPetTypes,
  searchProducts,
  filterProductsBySearch,
  addProductToCart,
  decreaseProduct,
  increaseProduct,
  deleteProduct,
  selectedPayMethod,
};
