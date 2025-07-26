import { createSlice } from '@reduxjs/toolkit';
import { axioslogin, axioslogout } from './Axios'; 

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const data = axioslogin(email, password);
      state.user = data.username;
      state.token = data.token;
      console.log("User logged in:", data.username);

    },
    logout: (state) => {
      axioslogout();
      state.user = null;
      state.token = null;
      localStorage.removeItem('token'); // Clear token from local storage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;