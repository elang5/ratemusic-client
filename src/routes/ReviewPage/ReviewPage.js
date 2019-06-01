import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'

export class ReviewPage extends Component {
  state = {
    review: [],
    album: []
  }

  componentDidMount() {
    const { albumId, reviewId } = this.props.match.params
    AlbumApiService.getAlbumReview(albumId, reviewId)
      .then(res => {
        this.setState({ review: res[0] })
      })
      .catch(err => this.setState({ error: err.error }))
  }

  handleGetAlbum() {
    AlbumApiService.getAlbum(this.props.match.params.albumId)
      .then(res => this.setState({ album: res }))
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    {this.handleGetAlbum()}
    const { review, album } = this.state
    return (
      <div className="review-page">
        <img src={album.art} alt={album.title} />
        <p>{`Title: ${review.title}`}</p>
        <p>{`Rating: ${review.rating}`}</p>
        <p>{review.content}</p>
      </div>
    )
  }
}

export default ReviewPage
