import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'
import AlbumItem from '../../components/AlbumItem/AlbumItem'

export class AlbumListPage extends Component {
  // static contextType = AlbumListContext
  state = {
    albums: [],
    error: null,
  }

  componentDidMount() {
    AlbumApiService.getAlbums()
      .then(res => this.setState({
        albums: [...res]
      }))
      .catch(res => this.setState({
        error: res.error
      }))
  }

  renderAlbums() {
    const { albums } = this.state
    return albums.map(album => 
      <AlbumItem
        key={album.id}
        album={album}
      />
      )
  }
  render() {
    const { error } = this.state
    return (
      <section className="album-list-page">
        {error
        ? <p className="error">There was an error. Please try again.</p>
        : this.renderAlbums()}
      </section>
    )
  }
}

export default AlbumListPage
