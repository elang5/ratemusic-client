import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setAlbums, setAlbumSearch } from "../../actions";
import "./SearchForm.css";

function SearchForm(props) {
  useEffect(() => {
    props.dispatch(setAlbums(props.albums));
  }, []);

  const handleAlbumChange = e => {
    props.dispatch(setAlbumSearch(e.target.value));
  };

  return (
    <header className="search-header">
      <form className="search-form" onSubmit={e => props.searchAlbums(e)}>
        <h1 className="red">Rate Music</h1>
        <div className="input-fields">
          <label htmlFor="album_search" className="search-label">
            {props.name}
          </label>
          <br />
          <input
            type="text"
            id="album_search"
            name="album_search"
            value={props.album}
            onChange={handleAlbumChange}
          />
        </div>
        <div className="button-container">
          <button type="submit">Search</button>
        </div>
      </form>
    </header>
  );
}

export default connect()(SearchForm);

SearchForm.defaultProps = {
  name: "",
  albums: [],
  searchAlbums: () => {}
};
