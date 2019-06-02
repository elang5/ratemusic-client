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
          <p className="user_info">{`By ${review.user_name} on ${review.date_created}`}</p>
          {/* <button className="delete-review-btn" onClick={handleDelete(review.id)}>Delete Review</button> */}
      </div>
    )
  }
}

export default ReviewItem
