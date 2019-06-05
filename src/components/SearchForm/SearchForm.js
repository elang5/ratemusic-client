import React, { Component } from 'react'
import './SearchForm.css'
import SpotifyAuth from '../../services/spotify-auth'
import Spotify from 'spotify-web-api-js'

const spotifyWebApi = new Spotify()
export default class AlbumSearchForm extends Component {
  static defaultProps = {
    name: '',
    handleSubmit: () => {}
  }

  constructor() {
    super()
    const params = SpotifyAuth.getHashParams()
    this.state = {
      loggedIn: params.access_token ? true : false,
      album: '',
      albums: []
    }
    if(params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token)
    }
  }

  searchAlbums = album => {
    spotifyWebApi.searchAlbums(album)
      .then(res => {
        const albums = res.albums.items
          .map(alb => {
            return { 
              album_id: alb.id,
              album_name: alb.name, 
              album_artist: alb.artists[0].name, 
              album_art: alb.images[1].url, 
              album_url: alb.external_urls.spotify }
          })
        this.setState({
          albums: albums
        })
      })
      .catch(err => console.error(err))
  }

  handleSearchSubmit = e => {
    e.preventDefault()
    const { album_search } = e.target
    this.setState({ album: album_search.value })
    this.searchAlbums(album_search.value)
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
