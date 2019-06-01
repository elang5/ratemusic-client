import React, { Component } from 'react'
import AlbumApiService from '../../services/albums-api-service'

export class ReviewPage extends Component {
  constructor(props) {
    super(props)

    // memory leak fix
    this._isMounted = false

    this.state = {
      review: [],
      album: []
    }
  }

  componentDidMount() {
    // memory leak fix
    this._isMounted = true
    const { albumId, reviewId } = this.props.match.params
    this._isMounted && AlbumApiService.getAlbumReview(albumId, reviewId)
      .then(res => {
        this.setState({ review: res[0] })
      })
      .catch(err => this.setState({ error: err.error }))
  }

  componentWillUnmount() {
    // memory leak fix
    this._isMounted = false
  }

  handleGetAlbum() {
    AlbumApiService.getAlbum(this.props.match.params.albumId)
      .then(res => this._isMounted && this.setState({ album: res }))
      .catch(err => this.setState({ error: err.error }))
  }

  render() {
    this.handleGetAlbum()
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
