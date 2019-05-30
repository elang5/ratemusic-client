import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AlbumItem extends Component {
  render() {
    const { album } = this.props
    return (
      <Link to={`/albums/${album.id}`} className="album">
        <div className="grid">
          <div className="box">
            <img src={album.art} alt={album.title}/>
            <p className="album-rating">{album.rating}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default AlbumItem
