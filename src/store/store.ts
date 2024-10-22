import {configureStore} from '@reduxjs/toolkit';
import productSlice, {ProductState} from './productSlice.ts';
import CartSlice, {Cart} from './cartSlice.ts';
import categorySlice from './categorySlice.ts';

export type RootState = {
  products: ProductState;
  categories: categorySlice;
  cart: Cart
};

const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categorySlice,
    cart: CartSlice
  }
});

export default store;