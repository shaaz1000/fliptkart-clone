import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailOrMobileNumber: "",
  password: "",
  signUpMobileNumber: "",
  name: "shaaz",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmailOrMobileNumber: (state, action) => {
      state.emailOrMobileNumber = action.payload;
    },
    setCurrentPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmailOrMobileNumber, setCurrentPassword } = authSlice.actions;

export default authSlice.reducer;
