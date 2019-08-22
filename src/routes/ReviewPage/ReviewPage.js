import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setAlbumArt,
  setAlbumName,
  setAlbumURL,
  setLoading,
  setReview,
  setError
} from "../../actions";
import { Link } from "react-router-dom";
import AlbumsApiService from "../../services/albums-api-service";
import AlbumStarRating from "../../components/AlbumStarRating/AlbumStarRating";
import ClipLoader from "../../components/ClipLoader/ClipLoader";
import "./ReviewPage.css";

function ReviewPage(props) {
  useEffect(() => {
    const { albumId, reviewId } = props.match.params;
    AlbumsApiService.getAlbumReview(albumId, reviewId)
      .then(res => {
        props.dispatch(setReview(res[0]));
      })
      .catch(err => props.dispatch(setError(err.error)));

    AlbumsApiService.getAlbum(props.match.params.albumId)
      .then(res => {
        props.dispatch(setAlbumArt(res.images[1].url));
        props.dispatch(setAlbumName(res.name));
        props.dispatch(setAlbumURL(res.external_urls.spotify));
        props.dispatch(setLoading(false));
      })
      .catch(err => props.dispatch(setError(err.error)));
  }, []);
  const { album_art, album_name, review, loading, album_url } = props;
  return (
    <div className="review-page">
      <a
        className="album-listen"
        href={album_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="listen-btn">{`Listen to ${album_name}`}</button>
      </a>
      <Link
        className="album-art-link"
        to={`/albums/${props.match.params.albumId}`}
      >
        {loading && <ClipLoader loading={loading} />}
        <img src={album_art} alt={album_name} className="album-art" />
      </Link>
      <h2 className="title">{`${review.title}`}</h2>
      <p>{`By: ${review.user_name}`}</p>
      <AlbumStarRating rating={review.rating} />
      <p className="review-content">{review.content}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  review: state.review,
  album_name: state.album_name,
  album_url: state.album_url,
  album_art: state.album_art
});

export default connect(mapStateToProps)(ReviewPage);
