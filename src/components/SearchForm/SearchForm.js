import React, { Component } from 'react'
import './SearchForm.css'

export default class AlbumSearchForm extends Component {
  static defaultProps = {
    name: '',
    handleSubmit: () => {}
  }
  
  state = {
    album: ''
  }

  handleSearchSubmit = e => {
    e.preventDefault()
    const { album_search } = e.target
    this.setState({ album: album_search.value })
    this.props.getAlbums(album_search.value)
  }
  render() {
    return (
      <header>
      <form 
        className="search-form" 
        onSubmit={this.handleSearchSubmit}
      >
        <h1 className="red">RateMusic</h1>
        <div className="input-fields">
          <label htmlFor="album_search" className="search-label">
            {this.props.name}
          </label><br />
          <input type="text" id="album_search" name="album_search" />
        </div>
        <div className="button-container">
          <button type="submit">
            Search
          </button>
        </div>
      </form>
      </header>
    )
  }
}
