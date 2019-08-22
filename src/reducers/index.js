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
    case "SET_REVIEWS":
      return Object.assign({}, state, {
        reviews: action.reviews
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
    case "SET_NAME":
      return Object.assign({}, state, {
        full_name: action.full_name
      });
    case "CLEAR_ERROR":
      return Object.assign({}, state, {
        error: null
      });
    case "SET_REVIEW_ALBUM":
      return Object.assign({}, state, {
        album: action.album
      });
    case "SET_REVIEW_TITLE":
      return Object.assign({}, state, {
        title: action.title
      });
    case "SET_REVIEW_RATING":
      return Object.assign({}, state, {
        rating: action.rating
      });
    case "SET_REVIEW_CONTENT":
      return Object.assign({}, state, {
        content: action.content
      });
    case "SET_ALBUM_SEARCH":
      return Object.assign({}, state, {
        albumSearch: action.album_search
      });
    case "SET_ALBUM_NAME":
      return Object.assign({}, state, {
        album_name: action.album_name
      });
    case "SET_ALBUM_URL":
      return Object.assign({}, state, {
        album_url: action.album_url
      });
    case "SET_ALBUM_ART":
      return Object.assign({}, state, {
        album_art: action.album_art
      });
    case "SET_REVIEW":
      return Object.assign({}, state, {
        review: action.review
      });
    default:
      return state;
  }
};
