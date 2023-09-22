import {
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  DELETE_PRODUCT,
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

const addProductToCart = (productId, quantity = 1) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

export {
  getDataSuccess,
  getDataFailed,
  addProductToCart,
  decreaseProduct,
  increaseProduct,
  deleteProduct,
};
