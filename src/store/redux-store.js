import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import cartReducer from "features/cartSlice";
import productsReducer from "features/productSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "cart"],
};

const rootReducer = combineReducers({
  cart: persistReducer(persistConfig, cartReducer),
  products: persistReducer(persistConfig, productsReducer),
});

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(reduxStore);
