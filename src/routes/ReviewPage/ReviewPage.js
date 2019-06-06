import React, { Component } from 'react'
import AlbumsApiService from '../../services/albums-api-service'
import './ReviewPage.css'

export class ReviewPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      review: [],
      album_art: '',
      album_name: ''
    }
  }

  componentDidMount() {
    const { albumId, reviewId } = this.props.match.params
    AlbumsApiService.getAlbumReview(albumId, reviewId)
      .then(res => {
        this.setState({ review: res[0] })
      })
      .catch(err => this.setState({ error: err.error }))

    AlbumsApiService.getAlbum(this.props.match.params.albumId)
      .then(res => {
        this.setState({ 
          album_art: res.images[1].url,
          album_name: res.name })
      })
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    const { album_art, album_name, review } = this.state
    return (
      <div className="review-page">
        <img src={album_art} alt={album_name} className="album-art" />
        <h2 className="title">{`${review.title}`}</h2>
        <p>{`By: ${review.user_name}`}</p>
        <p>{`Rating: ${review.rating}`}</p>
        <p className="review-content">{review.content}</p>
      </div>
    )
  }
}

export default ReviewPage
