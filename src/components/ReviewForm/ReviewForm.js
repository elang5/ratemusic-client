import React, { Component } from 'react'
import AlbumContext from '../../contexts/AlbumContext'
import AlbumApiService from '../../services/albums-api-service'

export class ReviewForm extends Component {
  static contextType = AlbumContext

  handleSubmit = e => {
    e.preventDefault()
    const { album } = this.context
    const { title, rating, content } = e.target

    AlbumApiService.postReview(album.id, album.user_id, title, rating, content)
      .then(this.context.addReview)
      .catch(this.context.setError)
  }
  render() {
    return (
      <form 
        className="review-form"
        onSubmit={this.handleSubmit}>
          <div className="title">
            <label htmlFor="title">Title</label>
            <input type="text" id="title"/>
          </div>
          <div className="rating-select">
            <label htmlFor="rating">Rate this album</label>
            <select 
              name="rating" 
              id="rating"
              aria-label='Rate this album'
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="content">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" cols="30" rows="20"></textarea>
          </div>
          <button type="submit">Post review</button>
      </form>
    )
  }
}

export default ReviewForm
