import { createAsyncThunk } from "@reduxjs/toolkit";
import { products } from "services/product.service";

export const addProductThunk = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const newProduct = await products.addProduct(productData);
      return newProduct;
    } catch (error) {
      console.error("Error adding product:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await products.getAllProducts();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const getProductByIdThunk = createAsyncThunk(
  "products/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await products.getProductById(id);
      if (!data) throw new Error("Product not found");
      return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      if (!updatedData || Object.keys(updatedData).length === 0) {
        throw new Error("❌ Updated Data is undefined or empty!");
      }

      const data = await products.updateProduct(id, updatedData);
      return data;
    } catch (error) {
      console.error("❌ Error updating product:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await products.deleteProduct(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
