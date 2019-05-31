import AlbumApiService from '../../services/albums-api-service'
import ReviewItem from '../../components/ReviewItem/ReviewItem'

import React, { Component } from 'react'

export class AlbumReviewsPage extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  state = {
    reviews: [],
    error: null
  }

  componentDidMount() {
    const { albumId } = this.props.match.params
    // AlbumApiService.getAlbum(albumId)
    //   .then(res => this.setState({ reviews: [...res] }))
    //   .catch(res => this.setState({ error: res.error }))
    AlbumApiService.getAlbumReviews(albumId)
      .then(res => this.setState({ reviews: [...res] }))
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const { reviews } = this.state
    console.log(reviews)
    return (
      <section className="album-reviews-page">
        {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
      </section>
    )
  }
}

export default AlbumReviewsPage
