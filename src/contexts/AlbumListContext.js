import React, { Component } from 'react'

const AlbumListContext = React.createContext({
  albumList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setAlbumList: () => {}
})

export default AlbumListContext

export class AlbumListProvider extends Component {
  state = {
    albumList: [],
    error: null
  }

  setAlbumList = albumList => {
    this.setState({ albumList })
  }
  
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      albumList: this.state.albumList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAlbumList: this.setAlbumList,
    }
    return (
      <AlbumListContext.Provider value={value}>
        {this.props.children}
      </AlbumListContext.Provider>
    )
  }
}

