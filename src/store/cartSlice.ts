import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../models/Cart.ts';

export interface Cart {
  cartItems: CartItem[];
}

const initialState: Cart = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const productInCart = state.cartItems.find(product => product.id === action.payload.id);
      if (!productInCart) {
        state.cartItems.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const productInCart = state.cartItems.find(product => product.id === id);
      if (productInCart) {
        productInCart.quantity = quantity;
        // Update total product price
        productInCart.totalPrice = productInCart.quantity * productInCart.price;
      }
    },
  },
});
export const {addCart, removeCart, updateQuantity} = CartSlice.actions;
export default CartSlice.reducer;