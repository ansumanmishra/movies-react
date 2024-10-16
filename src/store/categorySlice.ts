import {createSlice} from '@reduxjs/toolkit';

type CategorySlice = {
  data: string[];
  selectedCategory: string;
}

const initialState: CategorySlice = {
  data: [],
  selectedCategory: ''
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const {setCategories, setSelectedCategory} = categorySlice.actions;

export default categorySlice.reducer;