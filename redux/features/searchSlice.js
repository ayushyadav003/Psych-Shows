import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// initial State
const initialState = {
  searchValue: null,
  searchData: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // set input value action
    inputHandler(state, action) {
      state.searchValue = action.payload;
    },
    // set search data
    searchDataHandler(state, action) {
      state.searchData = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.search,
      };
    },
  },
});

export const { inputHandler, searchDataHandler } = searchSlice.actions;
