import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    suggestedUser:[],
    userProfile: null,
    selectedUser:null,
  },
  reducers: {
    // actions
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setsuggestedUser: (state, action) => {
      state.suggestedUser = action.payload;
    },
    setUserProfile: (state, action)=> {
      state.userProfile = action.payload
    },
    setSelectedUser: (state, action)=> {
      state.selectedUser = action.payload
    },
  },
});
export const { setAuthUser, setsuggestedUser, setUserProfile, setSelectedUser } = authSlice.actions;
export default authSlice.reducer;
