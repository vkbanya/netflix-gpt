import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { recentMovies: null, trailerVideo: null },
  reducers: {
    addRecentMovies: (state, action) => {
      state.recentMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addRecentMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
