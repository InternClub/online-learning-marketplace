import { configureStore } from '@reduxjs/toolkit';
// import yourSlice from '../features/yourSlice';
import wishlistReducer from './API/wishlistSlice';
import themeReducer from './API/themeSlice';
import authReducer from './API/authSlice';
import courseSlice from './API/courseSlice';
export const store = configureStore({
  reducer: {
    // yourState: yourSlice,
    wishlist: wishlistReducer,
    auth: authReducer,
    theme: themeReducer,
    course: courseSlice,
    
  },
});