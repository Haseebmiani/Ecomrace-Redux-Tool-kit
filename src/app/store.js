import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../component/features/Slice/sliderSlice";
import productReducer from "../component/features/Slice/productSlice";
import cartReducer from "../component/features/Slice/cartSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
