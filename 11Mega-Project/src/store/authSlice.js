import { createSlice } from "@reduxjs/toolkit";

const initailState = {
  status : false,
  userData : null
}

const authSlice = createSlice({
  name: "auth",
  initailState,
  reducers:{
    logIn : (state, action)=>{
      state.status = true;
      state.userData = action.payload.userData;
    },

    logOut : (state)=>{
        state.status = false
    }
  }
});

export const {logIn, logOut} = authSlice.actions
export default authSlice.reducer;