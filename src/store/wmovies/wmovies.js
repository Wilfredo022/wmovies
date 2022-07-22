import { createSlice } from "@reduxjs/toolkit";

export const wmovies = createSlice({
  name: "wmovies",
  initialState: {
    isLoading: true,
    trending: null,
    tv: null,
    pageMovie: [],
    pageTv: [],
    activeFilm: null,
    filmData: null,
  },
  reducers: {
    onTrending: (state, { payload }) => {
      state.trending = payload;
      state.isLoading = false;
    },
    onTv: (state, { payload }) => {
      state.tv = payload;
      state.isLoading = false;
    },
    onPageMovie: (state, { payload }) => {
      state.isLoading = true;
      if (state.pageMovie.length <= 0) {
        state.pageMovie = payload;
        state.isLoading = false;
      } else {
        payload.forEach((item, index) => {
          state.pageMovie.push(item);
        });

        state.isLoading = false;
      }
    },
    onPageTv: (state, { payload }) => {
      state.isLoading = true;
      if (state.pageTv.length <= 0) {
        state.pageTv = payload;
        state.isLoading = false;
      } else {
        payload.forEach((item, index) => {
          state.pageTv.push(item);
        });

        state.isLoading = false;
      }
    },
    onActiveFilm: (state, { payload }) => {
      state.isLoading = true;
      state.activeFilm = payload;
      state.isLoading = false;
    },
    activeFilmData: (state, { payload }) => {
      state.isLoading = true;
      state.filmData = payload;
      state.isLoading = false;
    },
  },
});

export const {
  onTrending,
  onTv,
  onPageMovie,
  onPageTv,
  onActiveFilm,
  activeFilmData,
} = wmovies.actions;
