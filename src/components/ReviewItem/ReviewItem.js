import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ReviewItem.css'

export class ReviewItem extends Component {
  render() {
    const { review } = this.props
    return (
      <li className="review">
        <Link to={`/albums/${review.album_id}/reviews/${review.id}`} className="review-link">
          <h3 className="review-title">{review.title}</h3>
        </Link>
          <span className="review-rating">{`Rating: ${review.rating}`}</span>
          <p className="user_info">{`By: ${review.user_name} on ${review.date_created}`}</p>
      </li>
    )
  }
}

export default ReviewItem
