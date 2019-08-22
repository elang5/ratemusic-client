import React from "react";
import { Link } from "react-router-dom";
import AlbumStarRating from "../../components/AlbumStarRating/AlbumStarRating";
import "./AlbumItem.css";

function AlbumItem(props) {
  const { album, name, album_id, rating } = props;
  return (
    <div className="album-item">
      <div className="album-name-container">
        <h3 className="album-name">{name}</h3>
      </div>
      <div className="container">
        <Link to={`/albums/${album_id}`} className="album">
          <img className="album-img" src={album} alt={album} />
        </Link>
        <AlbumStarRating className="review-stars" rating={rating} />
      </div>
    </div>
  );
}

export default AlbumItem;
