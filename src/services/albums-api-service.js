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
  getAlbum(albumId) {
    return fetch(`${config.API_asdfasdadsENDPOINT}/albums/${albumId}`)
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
  postReview(albumId, userId, title, content, rating) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        album_id: albumId,
        user_id: userId,
        title,
        rating,
        content
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
      }
  }

  export default AlbumsApiService