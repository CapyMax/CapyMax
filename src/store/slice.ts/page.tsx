import { createSlice } from "@reduxjs/toolkit";

const headerBgSlice = createSlice({
  name: "headerBg",
  initialState: true,
  reducers: {
    atEarnPage: () => true,
    atHomePage: () => false,
  },
});
export const { atEarnPage, atHomePage } = headerBgSlice.actions;
export default headerBgSlice;
