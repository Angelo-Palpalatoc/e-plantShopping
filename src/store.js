import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) existing.qty += 1;
      else state.push({ ...action.payload, qty: 1 });
    },
    inc: (state, action) => {
      const item = state.find((entry) => entry.id === action.payload);
      if (item) item.qty += 1;
    },
    dec: (state, action) => {
      const item = state.find((entry) => entry.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    del: (state, action) => state.filter((item) => item.id !== action.payload),
  },
});

export const { add, inc, dec, del } = cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
