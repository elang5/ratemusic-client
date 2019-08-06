import { combineReducers } from "redux";
import * as actions from "../actions";

const initialState = {
  albums: [],
  reviews: [],
  searchResults: [],
  albumSearch: "",
  album: {},
  review: {},
  album_name: "",
  album_url: "",
  album_art: "",
  title: "",
  rating: "",
  content: "",
  user_name: "",
  full_name: "",
  error: null,
  loading: false
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return Object.assign({}, state, {
        loading: action.loading
      });
    case "SET_ALBUMS":
      return Object.assign({}, state, {
        albums: action.albums
      });
    default:
      return state;
  }
};
