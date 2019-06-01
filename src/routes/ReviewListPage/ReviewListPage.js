import AlbumApiService from '../../services/albums-api-service'
import ReviewItem from '../../components/ReviewItem/ReviewItem'
import { Link } from 'react-router-dom'

import React, { Component } from 'react'

export class ReviewListPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  constructor(props) {
    super(props)

    this._isMounted = false

    this.state = {
      reviews: [],
      error: null
    }
  }

  componentDidMount() {

    this._isMounted = true
    const { albumId } = this.props.match.params
    this._isMounted && AlbumApiService.getAlbumReviews(albumId)
      .then(res => this.setState({ reviews: [...res] }))
      .catch(err => this.setState({ error: err.error }))
  }

  componentDidUpdate() {
    this._isMounted = true
    const { albumId } = this.props.match.params
    this._isMounted && AlbumApiService.getAlbumReviews(albumId)
      .then(res => this.setState({ reviews: [...res] }))
      .catch(err => this.setState({ error: err.error }))
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  // handleDeleteReview = id => {
  //   AlbumApiService.deleteReview(id)
  //     .catch(err => this.setState({ error: err.error }))
  // }

  render() {
    const { reviews, error } = this.state
    const { albumId } = this.props.match.params
    return (
      <section className="album-reviews-page">
        {error && <p className="error">{error}</p>}
        {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
        <Link to={`/${albumId}/reviews`}>
          Post a Review!
        </Link>
      </section>
    )
  }
}

export default ReviewListPage
