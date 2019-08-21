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
    case "SET_SEARCH":
      return Object.assign({}, state, {
        searchResults: action.searchResults
      });
    case "SET_ERROR":
      return Object.assign({}, state, {
        error: action.error
      });
    case "SET_USER":
      return Object.assign({}, state, {
        user_name: action.user_name
      });

    default:
      return state;
  }
};
