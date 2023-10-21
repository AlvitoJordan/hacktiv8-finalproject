import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveNews = createAsyncThunk("saved/news", (data) => {
  try {
    return data;
  } catch (error) {
    console.log(error);
  }
});

const savedSlice = createSlice({
  name: "savedSlice",
  initialState: {
    newss: [],
  },
  extraReducers: (builder) => {
    builder.addCase(saveNews.fulfilled, (state, action) => {
      state.newss = action.payload;
    });
  },
});

export default savedSlice.reducer;
