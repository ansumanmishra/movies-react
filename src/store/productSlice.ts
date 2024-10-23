import {Product} from '../models/Product.ts';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {PRODUCT_API_URL} from '../constants/config.ts';

export interface ProductState {
  data: Product[];
  loadingState: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ProductState = {
  data: [],
  loadingState: 'idle',
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch(PRODUCT_API_URL);
    return response.json();
  },
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductState) => {
        state.loadingState = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state: ProductState, action) => {
        const data: Product[] = action.payload as Product[];
        state.data = data;
        state.loadingState = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state: ProductState) => {
        state.loadingState = 'failed';
      });
  },
});

export const getProductById = (state: ProductState, productId: number | undefined) => {
  return state.data.find((product: Product) => product.id === productId);
};

export const {addProducts} = productSlice.actions;

export default productSlice.reducer;