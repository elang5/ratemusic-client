import React, { Component } from 'react'
import AlbumItem from '../../components/AlbumItem/AlbumItem'
import AlbumsApiService from '../../services/albums-api-service';
import SearchForm from '../../components/SearchForm/SearchForm';
import './AlbumListPage.css'

export class AlbumListPage extends Component {
  state = {
    error: null,
    reviews: []
  }

  componentDidMount() {
    AlbumsApiService.getAlbums()
      .then(albums => {
        return albums.map(album => album.images[1].url)
      })
    AlbumsApiService.getReviews()
      .then(reviews => this.setState({ reviews: reviews }))
      .catch(err => this.setState({ error: err.error }))
  }

  // renderAlbums = () => {
  //   const { albums } = this.state
  //   return albums.map((album, index) => 
  //     <li className="album" key={index}>
  //       <AlbumItem
  //         key={index}
  //         album={album.images[1].url}
  //         name={album.name}
  //         album_id={album.id}
  //         // rating={this.getAverageRatings(album.album_id)}
  //       />
  //     </li> 
  //     )
  // }

  renderReviews = () => {
    const { reviews } = this.state
    return reviews.map((review, index) => {
      return <li className="review" key={index}>
        <AlbumItem
          key={index}
          review={review.image}
          name={review.title}
          album_id={review.album_id}
        />
      </li>
    })
  }

  // searchAlbums = (album) => {
  //   const { albums } = this.state
  //   const matchedAlbums = albums.filter(albumName => {
  //     return albumName.title.includes(album)
  //   })
  //   this.setState({
  //     albums: matchedAlbums
  //   })
  // }
  
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
        <SearchForm name={'Search for Albums: '} />
        <section className="album-list-page">
          {error && <p className="error">There was an error. Please try again.</p>}
          <div className="container">
            <ul className="album-list">
              {this.renderReviews()}
            </ul>
          </div>
        </section>
      </>
    )
  }
}

export default AlbumListPage
