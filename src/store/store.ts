import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice.ts';
import CartSlice from './cartSlice.ts';

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: CartSlice
  }
});

export default store;