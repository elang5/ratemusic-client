import AlbumApiService from '../../services/albums-api-service'
import ReviewItem from '../../components/ReviewItem/ReviewItem'
import { Link } from 'react-router-dom'
import './ReviewListPage.css'

import React, { Component } from 'react'

export class ReviewListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  constructor(props) {
    super(props)

    this.state = {
      reviews: [],
      album_name: '',
      album_url: '',
      error: null
    }
  }

  componentDidMount() {
    const { albumId } = this.props.match.params
    AlbumApiService.getAlbumReviews(albumId)
      .then(res => this.setState({ reviews: [...res] }))
      .catch(err => this.setState({ error: err.error }))
    AlbumApiService.getAlbum(albumId)
      .then(album => this.setState({ album_name: album.name, album_url: album.external_urls.spotify }))
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    const { reviews, error, album_name, album_url } = this.state
    const { albumId } = this.props.match.params
    return (
      <section className="album-reviews-page">
        <div className="buttons">
          <Link className="post-review" to={`/${albumId}/reviews`}>
            <button className="review-btn">
              Post a Review!
            </button>
          </Link>
          <a className="album-listen" href={album_url}>
            <button className="listen-btn">{`Listen to ${album_name}`}</button>
        </a>
        </div>
        {error && <p className="error">{error}</p>}
        <ul className="review-list">
          {reviews && reviews.map(review => <ReviewItem 
            key={review.id} review={review} />)}
        </ul>
      </section>
    )
  }
}

export default ReviewListPage
