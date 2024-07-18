import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUserEmail: sessionStorage.getItem('activeUser') || ''
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUserEmail(state, action) {
      state.activeUserEmail = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;

export const { settoken, setNewUserEmail, setActiveUserEmail } = actions;

export default reducer;
