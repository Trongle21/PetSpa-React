import {
  ADD_PRODUCT_TO_CART,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
} from "./contain";

const initState = {
  products: [],
  error: null,
  loading: true,
  productCart: [],
};

const reducer = (state, action) => {
  let exist;
  let newProduct;
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ADD_PRODUCT_TO_CART:
      exist = state.productCart.find(
        (product) => product.productId === action.payload.productId
      );
      if (exist) {
        newProduct = state.productCart.map((product) =>
          product.productId === exist.productId
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product
        );
        return { ...state, productCart: newProduct };
      } else {
        return {
          ...state,
          productCart: [...state.productCart, action.payload],
        };
      }
    case DECREASE_PRODUCT:
      newProduct = state.productCart.map((product) => {
        if (product.productId === action.payload) {
          if (product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
        }
        return product;
      });

      newProduct = newProduct.filter((product) => product.quantity > 0);

      return { ...state, productCart: newProduct };

    case INCREASE_PRODUCT:
      newProduct = state.productCart.map((product) =>
        product.productId === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      return { ...state, productCart: newProduct };
    default:
      throw new Error("Invalid action");
  }
};

export { initState };

export default reducer;
