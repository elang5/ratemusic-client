import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AlbumItem.css'

export class AlbumItem extends Component {
  render() {
    const { album } = this.props
    return (
        <div className="cell">
          <div className="album">
            <Link to={`/albums/${album.id}`} className="album">
              <img src={album.art} alt={album.title}/>
            </Link>
            <div className="rating-container">
              <h3 className="album-rating">{album.rating}</h3>
            </div>
          </div>
        </div>
    )
  }
}

export default AlbumItem
