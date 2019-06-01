import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'

export class ReviewForm extends Component {
  state = {
    error: null,
    album: []
  }

  componentDidMount() {
    AlbumApiService.getAlbum(this.props.match.params.albumId)
      .then(res => this.setState({ album: res }))
      .catch(err => this.setState({ error: err.error }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { albumId } = this.props.match.params
    const { title, content, rating } = e.target
    AlbumApiService.postReview(albumId, title.value, content.value, rating.value)
      .then(console.log('success!'))
      .catch(err => this.setState({ error: err.error }))
  }
  render() {
    const { error, album } = this.state
    return (
      <form 
        className="review-form"
        onSubmit={this.handleSubmit}>
          {error && <p>{error}</p>}
          <div className="album-info">
            <h3>{`${album.artist}'s ${album.title}`}</h3>
          </div>
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
