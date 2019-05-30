import AlbumApiService from '../../services/albums-api-service'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import ReviewItem from '../../components/ReviewItem/ReviewItem'
import { Link } from 'react-router-dom'

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
    this.setState({ error: null })
    // AlbumApiService.getAlbum(albumId)
    //   .then(res => this.setState({ reviews: [...res] }))
    //   .catch(res => this.setState({ error: res.error }))
    AlbumApiService.getAlbumReviews(albumId)
      .then(res => this.setState({ reviews: [...res] }))
      .catch(res => this.setState({ error: res.error }))
  }

  render() {
    const { reviews } = this.state
    return (
      <section className="album-reviews-page">
        {reviews.map(review => <ReviewItem review={review} />)}
        <Link to="/reviews" component={ReviewForm} />
      </section>
    )
  }
}

export default AlbumReviewsPage
