import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUserList: (state, actions) => {
      state.userList = actions.payload;
    },
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer;
