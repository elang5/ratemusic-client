import React, { Component } from 'react'
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import AlbumsApiService from '../../services/albums-api-service';
import SearchForm from '../../components/SearchForm/SearchForm';
import './AlbumListPage.css'

export class AlbumListPage extends Component {
  state = {
    albums: [],
    error: null,
  }

  componentDidMount() {
    AlbumsApiService.getAlbums()
      .then(albums => this.setState({ albums: albums }))
      .catch(err => this.setState({ error: err }))
  }

  renderAlbums = () => {
    const { albums } = this.state
    return albums.map((album, index) => 
      <li className="album" key={index}>
        <AlbumItem
          key={index}
          album={album.images[1].url}
          name={album.name}
          album_id={album.id}
          // rating={this.getAverageRatings(album.album_id)}
        />
      </li> 
      )
  }

  searchAlbums = (album) => {
    const { albums } = this.state
    const matchedAlbums = albums.filter(albumName => {
      return albumName.title.includes(album)
    })
    this.setState({
      albums: matchedAlbums
    })
  }
  
  // getAverageRatings = (albumId) => {
  //   const { albums } = this.state
  //   const averageRating = AlbumsApiService.getAlbumReviews(albumId)
  //       .then(res => res.reduce((sum, review) => {
  //         return (sum + review.rating)
  //       }, 0) / res.length)
  //       .then(value => parseFloat(value).toFixed(1))
  //       .then(rating => albums[albumId - 1].rating = rating)
  //       .catch(err => this.setState({ error: err.error }))
  //   return averageRating
  // }

  render() {
    const { error } = this.state
    return (
      <>
        <SearchForm name={'Search for Albums: '} getAlbums={this.searchAlbums} />
        <section className="album-list-page">
          {error && <p className="error">There was an error. Please try again.</p>}
          <div className="container">
            <ul className="album-list">
              {this.renderAlbums()}
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default AlbumListPage
