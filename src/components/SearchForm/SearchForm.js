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
      <form 
        className="search-form" 
        onSubmit={this.handleSearchSubmit}
      >
        <div className="input-fields">
          <label htmlFor="album_search">
            {this.props.name}
          </label>
          <input type="text" id="album_search" name="album_search" />
        </div>
        <div className="button-container">
          <button type="submit">
            Search
          </button>
        </div>
      </form>
    )
  }
}
