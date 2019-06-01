import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import AlbumsApiService from '../../services/albums-api-service';

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
        rating={this.getAverageRatings(album.id)}
      />
      )
  }
  
  getAverageRatings(albumId) {
    const { albums } = this.state
    const averageRating = AlbumsApiService.getAlbumReviews(albumId)
        .then(res => res.reduce((sum, review) => {
          return (sum + review.rating)
        }, 0) / res.length)
        .then(value => parseFloat(value).toFixed(2))
        .then(rating => albums[albumId - 1].rating = rating)
        .catch(err => this.setState({ error: err.error }))
    return averageRating
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
