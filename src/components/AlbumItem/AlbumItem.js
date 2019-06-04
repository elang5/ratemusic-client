import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AlbumItem.css'

export class AlbumItem extends Component {
  render() {
    const { album } = this.props
    return (
      <div className="cell">
        <h3 className="album-rating">{album.rating}</h3>
          <div className="container">
            <Link to={`/albums/${album.id}`} className="album">
              <img src={album.art} alt={album.title}/>
            </Link>
          </div>
        </div>
    )
  }
}

export default AlbumItem
