import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../../assets/data/dummyData";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    FilteredProducts:
      JSON.parse(sessionStorage.getItem("filterData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );

        state.FilteredProducts = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filtertData", savedState);
      } catch (err) {
        return err;
      }
    },
    //For single Product
    singleProduct(state, action) {
      try {
        const oneProduct = state.FilteredProducts.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", savedState);
        console.log("oneProduct", oneProduct);
      } catch (err) {
        return err;
      }
    },
  },
});
export const { filterProducts, singleProduct } = productSlice.actions;
export default productSlice.reducer;
