import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoading, setAlbums, setSearch, setError } from "../../actions";
import AlbumItem from "../../components/AlbumItem/AlbumItem";
import AlbumsApiService from "../../services/albums-api-service";
import SearchForm from "../../components/SearchForm/SearchForm";
import ClipLoader from "../../components/ClipLoader/ClipLoader";
import "./AlbumListPage.css";

function AlbumListPage(props) {
  useEffect(() => {
    props.dispatch(setLoading(true));
    let albums;
    AlbumsApiService.getAlbums()
      .then(res => {
        albums = res;
        return Promise.all(
          albums &&
            albums.map(album => {
              return AlbumsApiService.getAlbumReviews(album.id)
                .then(reviews => {
                  const albumRating = reviews.map(review => review.rating);
                  const averageRating =
                    albumRating.reduce((sum, rating) => {
                      return sum + rating;
                    }, 0) / albumRating.length;
                  album.rating = averageRating.toFixed(0);
                  return reviews;
                })
                .catch(err => console.log(err));
            })
        ).then(reviews => {
          props.dispatch(setLoading(false));
          props.dispatch(setAlbums(albums));
        });
      })
      .catch(err => props.dispatch(setError(err.error)));
  }, []);

  const renderAlbums = albums => {
    return albums.map((album, index) => (
      <li className="album" key={index}>
        <AlbumItem
          key={index}
          album={album.images[1].url}
          name={album.name.substring(0, 30)}
          album_id={album.id}
          rating={album.rating ? album.rating : "No reviews submitted"}
        />
      </li>
    ));
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    let albums;
    const { album_search } = e.target;
    AlbumsApiService.searchAlbums(album_search.value)
      .then(albums_ => {
        props.dispatch(setLoading(true));
        albums = albums_;
        return Promise.all(
          albums.items.map(album => {
            return AlbumsApiService.getAlbumReviews(album.id)
              .then(reviews => {
                const albumRating = reviews.map(review => review.rating);
                const averageRating =
                  albumRating.reduce((sum, rating) => {
                    return sum + rating;
                  }, 0) / albumRating.length;
                return (album.rating = averageRating);
              })
              .catch(err => {
                if (!err.error === "No reviews were found") {
                  props.dispatch(setError(err.error));
                }
              });
          })
        ).then(albumRatings => {
          props.dispatch(setLoading(false));
          props.dispatch(setSearch(albums.items));
        });
      })
      .catch(err => props.dispatch(setError(err.error)));
  };

  return (
    <>
      <SearchForm
        name={"Search for Albums: "}
        searchAlbums={handleSearchSubmit}
        albums={props.albums}
      />
      <section className="album-list-page">
        {props.error && (
          <p className="error">There was an error. Please try again.</p>
        )}
        <ClipLoader loading={props.loading} />
        <div className="container">
          <ul className="album-list">
            {props.searchResults.length > 1
              ? renderAlbums(props.searchResults)
              : renderAlbums(props.albums)}
          </ul>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = state => ({
  albums: state.albums,
  loading: state.loading,
  searchResults: state.searchResults,
  error: state.error
});

export default connect(mapStateToProps)(AlbumListPage);
