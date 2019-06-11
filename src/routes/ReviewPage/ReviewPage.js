import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AlbumsApiService from '../../services/albums-api-service'
import AlbumStarRating from '../../components/AlbumStarRating/AlbumStarRating'
import ClipLoader from '../../components/ClipLoader/ClipLoader'
import './ReviewPage.css'

export class ReviewPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      review: [],
      album_art: '',
      album_name: '',
      album_url: '',
      loading: true
    }
  }

  componentDidMount() {
    const { albumId, reviewId } = this.props.match.params
    AlbumsApiService.getAlbumReview(albumId, reviewId)
      .then(res => {
        this.setState({ review: res[0] })
      })
      .catch(err => this.setState({ error: err.error }))

    AlbumsApiService.getAlbum(this.props.match.params.albumId)
      .then(res => {
        this.setState({ 
          album_art: res.images[1].url,
          album_name: res.name,
          album_url: res.external_urls.spotify,
          loading: false })
      })
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    const { album_art, album_name, review, loading, album_url } = this.state
    return (
      <div className="review-page">
        <a 
            className="album-listen" 
            href={album_url}
            target="_blank"
            rel="noopener noreferrer">
            <button className="listen-btn">{`Listen to ${album_name}`}</button>
        </a>
        <Link className="album-art-link"to={`/albums/${this.props.match.params.albumId}`}>
          {loading && <ClipLoader loading={loading} />}
          <img src={album_art} alt={album_name} className="album-art" />
        </Link>
        <h2 className="title">{`${review.title}`}</h2>
        <p>{`By: ${review.user_name}`}</p>
        <AlbumStarRating rating={review.rating} />
        <p className="review-content">{review.content}</p>
      </div>
    )
  }
}

export default ReviewPage
