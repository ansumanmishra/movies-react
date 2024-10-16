import {Product} from '../shared/interfaces/Product.ts';
import {createSelector, createSlice} from '@reduxjs/toolkit';

export interface ProductState {
  data: Product[];
}

const initialState: ProductState = {
  data: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {addProducts} = productSlice.actions;

export default productSlice.reducer;