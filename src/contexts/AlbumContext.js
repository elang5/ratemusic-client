import React, { Component } from 'react'

const nullAlbum = {
  title: '',
  artist: '',
  year: null,
  rating: null,
  art: null
}

const AlbumContext = React.createContext({
  album: nullAlbum,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setAlbum: () => {},
  clearAlbum: () => {},
  setReviews: () => {},
  addReview: () => {}
})

export default AlbumContext

export class AlbumProvider extends Component {
  state = {
    album: nullAlbum,
    error: null
  };

  setError = error => {
    console.error(error)
    this.setState({error})
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setAlbum = album => {
    this.setState({ album })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }
  render() {
    const value = {
      album: this.state.album,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAlbum: this.setAlbum,
      setReviews: this.setReviews,
      addReview: this.addReview
    }
    return (
      <AlbumContext.Provider value={value}>
        {this.props.children}
      </AlbumContext.Provider>
    )
  }
}

