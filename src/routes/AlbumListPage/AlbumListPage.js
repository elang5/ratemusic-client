import React, { Component } from 'react'
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import AlbumsApiService from '../../services/albums-api-service'
import SearchForm from '../../components/SearchForm/SearchForm'
import './AlbumListPage.css'

export class AlbumListPage extends Component {
  state = {
    albums: [],
    error: null,
    reviews: []
  }

  componentDidMount() {
    // AlbumsApiService.getAlbums()
    //   .then(albums => this.setState({ albums }))
    let albums;
    AlbumsApiService.getAlbums()
    .then(res => {
      albums = res
      return Promise.all(
        albums && albums.map(album => {
        return AlbumsApiService.getAlbumReviews(album.id)
          .then(reviews => {
            const albumRating = reviews.map((review) => review.rating)
            const averageRating = albumRating.reduce((sum, rating) => {
              return sum + rating
            }, 0) / albumRating.length
            album.rating = averageRating.toFixed(0)
            return reviews
          })
          .catch(err => console.log(err))
      }))
      .then(reviews => this.setState({ albums: albums, reviews: reviews }))
    })
    .catch(err => this.setState({ error: err.error }))
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
          rating={album.rating ? album.rating : 'No reviews submitted'}
        />
      </li> 
      )
  }

  handleSearchSubmit = e => {
    e.preventDefault()
    let albums
    const { album_search } = e.target
    AlbumsApiService.searchAlbums(album_search.value)
      .then(albums_ => {
        albums = albums_
        return Promise.all(
          albums.items.map(album => {
          return AlbumsApiService.getAlbumReviews(album.id)
            .then(reviews => {
              const albumRating = reviews.map((review) => review.rating)
              const averageRating = albumRating.reduce((sum, rating) => {
                return sum + rating
              }, 0) / albumRating.length
              album.rating = averageRating
              console.log(averageRating)
            })
            .catch(err => console.log(err))
        }))
        .then(reviews => this.setState({ albums: albums.items, reviews: reviews }))
      })
      .catch(err => this.setState({ error: err.error }))
  }
  
  getAverageRatings = (albumId) => {
    const averageRating = AlbumsApiService.getAlbumReviews(albumId)
        .then(res => res.reduce((sum, review) => {
          return (sum + review.rating)
        }, 0) / res.length)
        .then(value => parseFloat(value).toFixed(1))
        .then(rating => console.log(rating))
        .catch(err => this.setState({ error: err.error }))
    return averageRating
  }

  render() {
    const { error, albums } = this.state
    return (
      <>
        <SearchForm name={'Search for Albums: '} searchAlbums={this.handleSearchSubmit} albums={albums}/>
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
