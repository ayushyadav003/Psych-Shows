import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// initial State
const initialState = {
  movie: null,
};

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    // set input value action
    currentMovie(state, action) {
      state.movie = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.movie,
      };
    },
  },
});

export const { currentMovie } = movieDetailSlice.actions;
