import { createSlice } from "@reduxjs/toolkit";
import {
  addProductThunk,
  deleteProductThunk,
  fetchProducts,
  getProductByIdThunk,
  updateProductThunk,
} from "hooks/useProduct";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    selectedProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.items = action.error.message;
      })

      .addCase(getProductByIdThunk.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getProductByIdThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload;
      })

      .addCase(getProductByIdThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(updateProductThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
