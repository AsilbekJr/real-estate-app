import { createSlice } from "@reduxjs/toolkit";

type isLoadingType = null | boolean;

export type initialStateType = {
  currentUser: null;
  error: null;
  isLoading: isLoadingType;
};
const initialState: initialStateType = {
  currentUser: null,
  error: null,
  isLoading: <isLoadingType>null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { signInFailure, signInStart, signInSuccess } = userSlice.actions;
export default userSlice.reducer;
