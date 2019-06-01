import React, { Component } from 'react'

const ReviewListContext = React.createContext({
  reviewList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setReviewList: () => {}
})

export default ReviewListContext

export class ReviewListProvider extends Component {
  state = {
    reviewList: [],
    error: null
  }

  setReviewList = reviewList => {
    this.setState({ reviewList })
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
      reviewList: this.state.reviewList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setReviewList: this.setReviewList,
    }
    return (
      <ReviewListContext.Provider value={value}>
        {this.props.children}
      </ReviewListContext.Provider>
    )
  }
}

