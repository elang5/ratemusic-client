import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'

export class ReviewPage extends Component {
  state = {
    review: []
  }

  componentDidMount() {
    const { reviewId } = this.props.match.params
    console.log(reviewId)
    AlbumApiService.getAlbumReviews(reviewId)
      .then(res => {
        const review = res[0]
        this.setState({ review: review })
      })
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    const { review } = this.state
    console.log(review)
    return (
      <div className="review-page">
        <p>{review.title}</p>
        <img src="{review.image}" alt="{review.title}"/>
        <p>{review.rating}</p>
        <p>{review.content}</p>
      </div>
    )
  }
}

export default ReviewPage
