import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ReviewItem extends Component {
  render() {
    const { review } = this.props
    return (
      <div className="review">
        <Link to={`/albums/${review.album_id}/reviews/${review.id}`} className="album">
          <p className="review-title">{review.title}</p>
        </Link>
          <span className="review-rating">{review.rating}</span>
      </div>
    )
  }
}

export default ReviewItem
