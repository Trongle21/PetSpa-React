import {
  ADD_PRODUCT_TO_CART,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
  DECREASE_PRODUCT,
  INCREASE_PRODUCT,
  DELETE_PRODUCT,
  SELECTED_PET_TYPES,
  SEARCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SEARCH,
  SELECTED_PAY_METHOD,
} from "./contain";

const initState = {
  products: [],
  error: null,
  loading: true,
  productCart: [],
  originalProducts: [],
  selectedTypes: "",
  inputSearch: "",
  selectedPayMethod: [],
};

const reducer = (state, action) => {
  let exist;
  let newProduct;
  let products;
  let listProduct;
  let selectedMethod;
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        products: action.payload,
        originalProducts: action.payload,
        loading: false,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case SELECTED_PET_TYPES:
      if (action.payload === "cat and dog") {
        listProduct = state.originalProducts;
      } else if (action.payload === "cat") {
        listProduct = state.originalProducts.filter((product) =>
          product.type.includes("cat")
        );
      } else if (action.payload === "dog") {
        listProduct = state.originalProducts.filter((product) =>
          product.type.includes("dog")
        );
      }
      return {
        ...state,
        products: listProduct,
      };

    case SEARCH_PRODUCTS:
      return {
        ...state,
        inputSearch: action.payload,
      };

    case FILTER_PRODUCTS_BY_SEARCH:
      listProduct = state.originalProducts.filter((product) =>
        product.description.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        products: listProduct,
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

    case DELETE_PRODUCT:
      products = state.productCart.filter(
        (product) => product.productId !== action.payload
      );
      return { ...state, productCart: products };

    // case SELECTED_PAY_METHOD:
    //   selectedMethod = action.payload;
    //   if(selectedMethod.includes())
    //   return {
    //     ...state,
    //     selectedPayMethod: selectPayMethod,
    //   };

    default:
      throw new Error("Invalid action");
  }
};

export { initState };

export default reducer;
