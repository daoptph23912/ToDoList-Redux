import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../ReduxToolkit2/features/cart/cartSlice";
import modalReducer from "../ReduxToolkit2/features/modal/modalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
