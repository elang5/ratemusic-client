import React, { Component } from 'react'
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import AlbumsApiService from '../../services/albums-api-service'
import SearchForm from '../../components/SearchForm/SearchForm'
import ClipLoader from '../../components/ClipLoader/ClipLoader'
import './AlbumListPage.css'

export class AlbumListPage extends Component {
  state = {
    albums: [],
    searchResults: [],
    error: null,
    loading: true
  }

  componentDidMount() {
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
      .then(reviews => this.setState({ albums: albums, loading: false }))
    })
    .catch(err => this.setState({ error: err.error }))
}

  renderAlbums = (albums) => {
    return albums.map((album, index) => 
      <li className="album" key={index}>
        <AlbumItem
          key={index}
          album={album.images[1].url}
          name={album.name.substring(0, 30)}
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
        this.setState({ loading: true })
        albums = albums_
        return Promise.all(
          albums.items.map(album => {
          return AlbumsApiService.getAlbumReviews(album.id)
            .then(reviews => {
                  const albumRating = reviews.map((review) => review.rating)
                  const averageRating = albumRating.reduce((sum, rating) => {
                    return sum + rating
                  }, 0) / albumRating.length
                  return album.rating = averageRating
            })
            .catch(err => {
              if(!err.error === 'No reviews were found') {
                this.setState({ error: err.error })
              }
            })
        }))
        .then(albumRatings => this.setState({ searchResults: albums.items, loading: false }))
      })
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    const { error, albums, searchResults, loading } = this.state
    return (
      <>
        <SearchForm 
          name={'Search for Albums: '} 
          searchAlbums={this.handleSearchSubmit} 
          albums={albums}/>
        <section className="album-list-page">
          {error && <p className="error">There was an error. Please try again.</p>}
          {loading && <ClipLoader loading={loading} />}
          <div className="container">
            <ul className="album-list">
              {searchResults.length > 1 ? this.renderAlbums(searchResults) : this.renderAlbums(albums)}
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default AlbumListPage
