import { configureStore } from '@reduxjs/toolkit';
// import yourSlice from '../features/yourSlice';
import wishlistReducer from './API/wishlistSlice';

export const store = configureStore({
  reducer: {
    // yourState: yourSlice,
    wishlist: wishlistReducer,
  },
});