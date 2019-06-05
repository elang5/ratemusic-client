import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AlbumItem.css'

export class AlbumItem extends Component {
  render() {
    const { album, name, album_id } = this.props
    return (
      <div className="cell">
        {/* <h3 className="album-rating">{album.rating}</h3> */}
        <h3 className="album-name">{name}</h3>
          <div className="container">
            <Link to={`/albums/${album_id}`} className="album">
              <img src={album} alt={album}/>
            </Link>
          </div>
        </div>
    )
  }
}

export default AlbumItem
