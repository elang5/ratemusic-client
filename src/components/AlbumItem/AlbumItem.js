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
              <h3>{album.title}</h3>
            </Link>
            <img src={album.art} alt={album.title}/>
            <p className="album-rating">{album.rating}</p>
          </div>
        </div>
    )
  }
}

export default AlbumItem
