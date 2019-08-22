export const SET_ALBUMS = "SET_ALBUMS";
export const setAlbums = albums => ({
  type: SET_ALBUMS,
  albums
});

export const SET_LOADING = "SET_LOADING";
export const setLoading = loading => ({
  type: SET_LOADING,
  loading
});

export const SET_SEARCH = "SET_SEARCH";
export const setSearch = searchResults => ({
  type: SET_SEARCH,
  searchResults
});

export const SET_ERROR = "SET_ERROR";
export const setError = error => ({
  type: SET_ERROR,
  error
});

export const CLEAR_ERROR = "CLEAR_ERROR";
export const clearError = () => ({
  type: CLEAR_ERROR
});

export const SET_USER = "SET_USER";
export const setUser = user_name => ({
  type: SET_USER,
  user_name
});

export const SET_NAME = "SET_NAME";
export const setName = full_name => ({
  type: SET_NAME,
  full_name
});

export const SET_REVIEW_ALBUM = "SET_REVIEW_ALBUM";
export const setReviewAlbum = album => ({
  type: SET_REVIEW_ALBUM,
  album
});

export const SET_REVIEW_TITLE = "SET_REVIEW_TITLE";
export const setReviewTitle = title => ({
  type: SET_REVIEW_TITLE,
  title
});

export const SET_REVIEW_RATING = "SET_REVIEW_RATING";
export const setReviewRating = rating => ({
  type: SET_REVIEW_RATING,
  rating
});

export const SET_REVIEW_CONTENT = "SET_REVIEW_CONTENT";
export const setReviewContent = content => ({
  type: SET_REVIEW_CONTENT,
  content
});

export const SET_ALBUM_SEARCH = "SET_ALBUM_SEARCH";
export const setAlbumSearch = album_search => ({
  type: SET_ALBUM_SEARCH,
  album_search
});

export const SET_REVIEWS = "SET_REVIEWS";
export const setReviews = reviews => ({
  type: SET_REVIEWS,
  reviews
});

export const SET_ALBUM_NAME = "SET_ALBUM_NAME";
export const setAlbumName = album_name => ({
  type: SET_ALBUM_NAME,
  album_name
});

export const SET_ALBUM_URL = "SET_ALBUM_URL";
export const setAlbumURL = album_url => ({
  type: SET_ALBUM_URL,
  album_url
});

export const SET_ALBUM_ART = "SET_ALBUM_ART";
export const setAlbumArt = album_art => ({
  type: SET_ALBUM_ART,
  album_art
});

export const SET_REVIEW = "SET_REVIEW";
export const setReview = review => ({
  type: SET_REVIEW,
  review
});
