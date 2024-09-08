import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../shared/interfaces/Product.ts';

export interface Cart {
  products: Product[];
}

const initialState: Cart = {
  products: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productInCart = state.products.find(product => product.id === action.payload.id);
      if (!productInCart) {
        state.products.push(action.payload);
      }
    },
  },
});
export const {addCart} = CartSlice.actions;
export default CartSlice.reducer;