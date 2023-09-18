import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";
export const MovieStore = configureStore({
  reducer: {
    movies: MovieSlice,
  },
});
