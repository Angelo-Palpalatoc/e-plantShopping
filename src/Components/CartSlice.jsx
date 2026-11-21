import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartDocumentation',
  initialState: [],
  reducers: {
    addItem: (state, action) => state.concat(action.payload),
    removeItem: (state, action) => state.filter((item) => item.id !== action.payload),
    updateQuantity: (state, action) => state,
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
