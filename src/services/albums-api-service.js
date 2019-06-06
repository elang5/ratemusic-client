import config from '../config'
import TokenService from './token-service'

const AlbumsApiService = {
  getAlbums() {
    return fetch(`${config.API_ENDPOINT}/albums`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  searchAlbums(searchTerm) {
    return fetch(`${config.API_ENDPOINT}/albums/search/${searchTerm}}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  getReviews() {
    return fetch(`${config.API_ENDPOINT}/reviews`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  getAlbum(albumId) {
    return fetch(`${config.API_ENDPOINT}/albums/${albumId}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  getAlbumReviews(albumId) {
    return fetch(`${config.API_ENDPOINT}/albums/${albumId}/reviews`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  getAlbumReview(albumId, reviewId) {
    return fetch(`${config.API_ENDPOINT}/albums/${albumId}/reviews/${reviewId}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json())
  },
  postReview(albumId, title, content, rating, image) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        album_id: albumId,
        title,
        rating,
        content,
        image
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
      },
  deleteReview(reviewId) {
    return fetch(`${config.API_ENDPOINT}/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
    }
  }

  export default AlbumsApiService