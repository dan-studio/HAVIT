import { createSlice } from "@reduxjs/toolkit";

export const tagSlice = createSlice({
  name: "tag",
  initialState: {
    tag: [],
  },
  reducers: {
    selectTag: (state, action) => {
      state.tag = action.payload;
    },
    clearTag: (state) => {
      state.tag = undefined;
    },
  },
});
export const { selectTag, clearTag } = tagSlice.actions;

export default tagSlice.reducer;
