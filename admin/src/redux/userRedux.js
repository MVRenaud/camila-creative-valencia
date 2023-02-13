import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    // //Get current User
    // getCurrentUserStart: (state) => {
    //   state.isFetching = true;
    // },
    // getCurrentUserSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.currentUser = action.payload._id;
    // },
    // getCurrentUserFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
    //GET ALL
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // //Get User
    // getUserStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // getUserSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.currentUser.findIndex((user) => user._id === action.payload);
    // },
    // getUserFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    //DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser.splice(
        state.currentUser.findIndex((user) => user._id === action.payload),
        0
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser[
        state.currentUser.findIndex((user) => user._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, getUsersStart, getUsersSuccess, getUsersFailure, getUserStart, deleteUserStart, deleteUserSuccess, deleteUserFailure, updateUserStart, updateUserSuccess, updateUserFailure } = userSlice.actions;
export default userSlice.reducer;