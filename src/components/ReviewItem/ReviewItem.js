import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AlbumStarRating from '../AlbumStarRating/AlbumStarRating'
import './ReviewItem.css'

export class ReviewItem extends Component {
  render() {
    const { review } = this.props
    const date_created = new Date(review.date_created).toLocaleDateString()
    return (
      <li className="review">
        <Link to={`/albums/${review.album_id}/reviews/${review.id}`} className="review-link">
          <h3 className="review-title">{review.title}</h3>
        </Link>
          <AlbumStarRating rating={review.rating} />
          <p className="user_info">{`By: ${review.user_name} on ${date_created}`}</p>
      </li>
    )
  }
}

export default ReviewItem
