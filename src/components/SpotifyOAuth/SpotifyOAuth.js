import React, { Component } from 'react'
import './SpotifyOAuth.css'

export class SpotifyOAuth extends Component {
  render() {
    return (
      <div className="container">
        <button className="spotify-login">
          <a href="http://localhost:8888">Sign In To Spotify</a>
        </button>
      </div>
    )
  }
}

export default SpotifyOAuth




