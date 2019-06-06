import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'
import './ReviewForm.css'

export class ReviewForm extends Component {
  state = {
    error: null,
    album: [],
    review: [],
    user: []
  }

  componentDidMount() {
    AlbumApiService.getAlbum(this.props.match.params.albumId)
      .then(res => this.setState({ album: res }))
      .catch(err => this.setState({ error: err.error }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { albumId } = this.props.match.params
    const albumImage = AlbumApiService.getAlbum(albumId)
      .then(async album => await album.images[1].url)
      .catch(err => this.setState({ error: err.error }))
    const { title, content, rating } = e.target
    const { history } = this.props
    // can probably clean this up and remove state besides error handling
    AlbumApiService.postReview(albumId, title.value, content.value, rating.value, albumImage)
      .then(res => this.setState({ review: res, user: res.user }, () => history.push(`/albums/${albumId}`)))
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    const { error, album } = this.state
    return (
      <div className="review-form-container">
      <form 
        className="review-form"
        onSubmit={this.handleSubmit}>
          {error && <p>{error}</p>}
          <div className="album-info">
            <h2 className="album-name">{`${album.name}`}</h2>
          </div>
          <div className="title">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title"/>
          </div>
          <div className="rating-select">
            <label htmlFor="rating">Rating: </label>
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
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="content">
            <label htmlFor="content">Content: </label><br />
            <textarea name="content" id="content" cols="30" rows="20"></textarea>
          </div>
          <button className="review-submit-btn" type="submit">Post review</button>
      </form>
      </div>
    )
  }
}

export default ReviewForm
