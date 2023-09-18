import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = { data: [], status: "idle" };
const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.data = action.payload.results;
        state.status = "success";
      })
      .addCase(getMovies.rejected, (state, acton) => {
        state.status = "failed";
      });
  },
});
export const getMovies = createAsyncThunk("get/data", async (URL) => {
  const res = await fetch(URL);
  const result = res.json();

  return result;
});

export default MovieSlice.reducer;
