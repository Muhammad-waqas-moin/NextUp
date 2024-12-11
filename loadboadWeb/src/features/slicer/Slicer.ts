import { createSlice } from "@reduxjs/toolkit";

// export const baseUrl = "http://192.168.18.174:2000/api";
 const token = localStorage.getItem("tokenwillbehere");


// admin@dbweb.com pass : 263122
const initialState = {
  testValue: 1,
  isLoading: false,
  isError: false,
};

export const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const Slicer = createSlice({
  name: "slicer",
  initialState,
  reducers: {},
});

export default Slicer.reducer;
