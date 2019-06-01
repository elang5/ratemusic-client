import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ReviewItem extends Component {
  render() {
    const { review } = this.props
    return (
      <div className="review">
        <Link to={`/reviews/${review.id}`} className="album">
          <p className="review-title">{review.title}</p>
        </Link>
          <img src={review.image} alt={review.id}/>
          <span className="review-rating">{review.rating}</span>
      </div>
    )
  }
}

export default ReviewItem
