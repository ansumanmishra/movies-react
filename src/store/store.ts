import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice.ts';
import CartSlice from './cartSlice.ts';
import categorySlice from './categorySlice.ts';

const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categorySlice,
    cart: CartSlice
  }
});

export default store;