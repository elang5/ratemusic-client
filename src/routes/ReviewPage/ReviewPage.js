import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'

export class ReviewPage extends Component {
  state = {
    review: []
  }

  componentDidMount() {
    const { albumId, reviewId } = this.props.match.params
    AlbumApiService.getAlbumReview(albumId, reviewId)
      .then(res => {
        this.setState({ review: res[0] })
      })
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    const { review } = this.state
    return (
      <div className="review-page">
        <p>{`Title: ${review.title}`}</p>
        <p>{`Rating: ${review.rating}`}</p>
        <p>{review.title}</p>
      </div>
    )
  }
}

export default ReviewPage
