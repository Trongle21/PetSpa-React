import {
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_PRODUCT_TO_CART,
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

const addProductToCart = (payload) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload,
  };
};

export { getDataSuccess, getDataFailed, addProductToCart };
