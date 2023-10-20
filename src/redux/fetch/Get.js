import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPIAct = createAsyncThunk("get/api", async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.log(error);
  }
});

export const fetchAPISlice = createSlice({
  name: "fetchAPI",
  initialState: {
    news: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIAct.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(getAPIAct.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export default fetchAPISlice.reducer;
