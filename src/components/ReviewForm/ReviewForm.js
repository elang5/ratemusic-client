import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setReviewAlbum,
  setReviewTitle,
  setReviewRating,
  setReviewContent,
  setError
} from "../../actions";
import AlbumApiService from "../../services/albums-api-service";
import "./ReviewForm.css";

export class ReviewForm extends Component {
  componentDidMount() {
    AlbumApiService.getAlbum(this.props.match.params.albumId)
      .then(res => this.props.dispatch(setReviewAlbum(res)))
      .catch(err => this.props.dispatch(setError(err.error)));
  }

  handleTitleChange = e => {
    this.props.dispatch(setReviewTitle(e.target.value));
  };

  handleRatingChange = e => {
    this.props.dispatch(setReviewRating(e.target.value));
  };

  handleContentChange = e => {
    this.props.dispatch(setReviewContent(e.target.value));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { albumId } = this.props.match.params;
    const albumImage = AlbumApiService.getAlbum(albumId)
      .then(album => album.images[1].url)
      .catch(err => this.props.dispatch(setError(err.error)));
    const { title, content, rating } = e.target;
    const { history } = this.props;
    AlbumApiService.postReview(
      albumId,
      title.value,
      content.value,
      rating.value,
      albumImage
    )
      .then(() => history.push(`/albums/${albumId}`))
      .catch(
        err => this.props.dispatch(setError(err.error)),
        history.push("/login")
      );
  };

  render() {
    const { error, album, title, rating, content } = this.props;
    return (
      <div className="review-form-container">
        <form className="review-form" onSubmit={this.handleSubmit}>
          {error && <p>{error}</p>}
          <div className="album-info">
            <h2 className="album-title">{`${album.name}`}</h2>
          </div>
          <div className="title">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="rating-select">
            <label htmlFor="rating">Rating: </label>
            <select
              name="rating"
              id="rating"
              aria-label="Rate this album"
              value={rating}
              onChange={this.handleRatingChange}
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
            <label htmlFor="content">Content: </label>
            <br />
            <textarea
              name="content"
              id="content"
              cols="70"
              rows="17"
              value={content}
              onChange={this.handleContentChange}
            />
          </div>
          <button className="review-submit-btn" type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  album: state.album,
  title: state.title,
  rating: state.rating,
  content: state.content
});

export default connect(mapStateToProps)(ReviewForm);
