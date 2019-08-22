import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setReviews, setAlbumName, setAlbumURL, setError } from "../../actions";
import { Link } from "react-router-dom";
import AlbumApiService from "../../services/albums-api-service";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import "./ReviewListPage.css";

function ReviewListPage(props) {
  useEffect(() => {
    const { albumId } = props.match.params;
    AlbumApiService.getAlbumReviews(albumId)
      .then(res => props.dispatch(setReviews([...res])))
      .catch(err => props.dispatch(setError(err.error)));
    AlbumApiService.getAlbum(albumId)
      .then(album => {
        props.dispatch(setAlbumName(album.name));
        props.dispatch(setAlbumURL(album.external_urls.spotify));
      })
      .catch(err => props.dispatch(setError(err.error)));
  }, []);

  const { reviews, error, album_name, album_url } = props;
  const { albumId } = props.match.params;
  return (
    <section className="album-reviews-page">
      <div className="buttons">
        <Link className="post-review" to={`/${albumId}/reviews`}>
          <button className="review-btn">Post a Review!</button>
        </Link>
        <a
          className="album-listen"
          href={album_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="listen-btn">{`Listen to ${album_name}`}</button>
        </a>
      </div>
      {error && <p className="no-reviews-error">{error}</p>}
      <ul className="review-list">
        {reviews &&
          reviews.map(review => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </section>
  );
}

const mapStateToProps = state => ({
  reviews: state.reviews,
  album_name: state.album_name,
  album_url: state.album_url
});

export default connect(mapStateToProps)(ReviewListPage);

ReviewListPage.defaultProps = {
  match: { params: {} }
};
