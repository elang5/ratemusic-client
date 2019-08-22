import React, { Component } from "react";
import { connect } from "react-redux";
import { setAlbums, setAlbumSearch } from "../../actions";
import "./SearchForm.css";

class SearchForm extends Component {
  static defaultProps = {
    name: "",
    albums: [],
    searchAlbums: () => {}
  };

  componentDidMount() {
    this.props.dispatch(setAlbums(this.props.albums));
  }

  handleAlbumChange = e => {
    this.props.dispatch(setAlbumSearch(e.target.value));
  };

  render() {
    return (
      <header className="search-header">
        <form
          className="search-form"
          onSubmit={e => this.props.searchAlbums(e)}
        >
          <h1 className="red">Rate Music</h1>
          <div className="input-fields">
            <label htmlFor="album_search" className="search-label">
              {this.props.name}
            </label>
            <br />
            <input
              type="text"
              id="album_search"
              name="album_search"
              value={this.props.album}
              onChange={this.handleAlbumChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Search</button>
          </div>
        </form>
      </header>
    );
  }
}

export default connect()(SearchForm);
