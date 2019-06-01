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
      .catch(res => this.setState({ error: res.error }))
  }

  componentDidUpdate() {
    this._isMounted = true
    const { albumId } = this.props.match.params
    this._isMounted && AlbumApiService.getAlbumReviews(albumId)
      .then(res => this.setState({ reviews: [...res] }))
      .catch(res => this.setState({ error: res.error }))
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { reviews } = this.state
    const { albumId } = this.props.match.params
    return (
      <section className="album-reviews-page">
        {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
        <Link to={`/${albumId}/reviews`}>
          Post a Review!
        </Link>
      </section>
    )
  }
}

export default ReviewListPage
