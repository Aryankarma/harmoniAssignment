import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0
  },
  reducers: {
    incrementCart: (state) => {
      state.count += 1;
    }
  }
});

export const { incrementCart } = cartSlice.actions;
export default cartSlice.reducer;
