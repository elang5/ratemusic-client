import React, { Component } from 'react'
import './SearchForm.css'

export default class SearchForm extends Component {
  static defaultProps = {
    name: '',
    albums: [],
    handleSubmit: () => {}
  }

  constructor() {
    super()
    this.state = {
      album: '',
      albums: [],
      error: null
    }
  }

  componentDidMount() {
    this.setState({
      albums: this.props.albums
    })
  }


  render() {
    return (
      <header className="search-header">
      <form 
        className="search-form" 
        onSubmit={(e) => this.props.searchAlbums(e)}
      >
        <h1 className="red">Rate Music</h1>
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
