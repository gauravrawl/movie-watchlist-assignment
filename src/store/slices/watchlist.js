import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // movieData: "",
  movieNameSearch: "",
  listSearch: "",
  watchlists: {},
  mobileSidebarShow: false,
  currentWatchList: "",
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setMovieNameSearch(state, action) {
      state.movieNameSearch = action.payload;
    },
    setSearchInList(state, action) {
      state.listSearch = action.payload;
    },
    setMobileSidebarShow(state, action) {
      state.mobileSidebarShow = action.payload;
    },
    setWatchlists(state, action) {
      state.watchlists = action.payload;
    },
    setCurrentWatchList(state, action) {
      state.currentWatchList = action.payload;
    },
  },
});

const { reducer, actions } = watchlistSlice;

export const {
  setMovieNameSearch,
  setSearchInList,
  setMobileSidebarShow,
  setWatchlists,
  setCurrentWatchList,
} = actions;

export default reducer;
