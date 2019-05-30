import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ReviewItem extends Component {
  render() {
    const { review } = this.props
    return (
      <Link to={`/albums/${review.album_id}/reviews`} className="album">
      <div className="review">
          <img src={review.image} alt={review.title}/>
          <span className="review-rating">{review.rating}</span>
          <span className="review-title">{review.title}</span>
      </div>
    </Link>
    )
  }
}

export default ReviewItem
