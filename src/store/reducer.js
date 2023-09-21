import {
  ADD_PRODUCT_TO_CART,
  GET_DATA_FAILED,
  GET_DATA_SUCCESS,
} from "./contain";

const initState = {
  products: [],
  error: null,
  loading: true,
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
      exist = state.products.find((item) => item.id === action.payload.id);

      if (exist) {
        newProduct = state.products.map((item) =>
          item.id === exist.id
            ? {
                ...state,
                quantity: item.quantity + action.payload.quantity,
              }
            : item
        );
        console.log("da tang them so luong san pham vao gio hang");
        return { ...state, products: newProduct };
      } else {
        console.log("da them san pham vao gio hang");
        return { ...state, products: [...state.products, action.payload] };
      }

    default:
      throw new Error("Invalid action");
  }
};

export { initState };

export default reducer;
