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

export const SET_USER = "SET_USER";
export const setUser = user_name => ({
  type: SET_USER,
  user_name
});
