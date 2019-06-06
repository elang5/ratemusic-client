import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SpotifyOAuth from '../../components/SpotifyOAuth/SpotifyOAuth'
import './Login.css'
import SearchForm from '../../components/SearchForm/SearchForm'

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }
  
  render() {
    return (
      <>
      <SearchForm />
      <div className="login-page">
        <SpotifyOAuth />
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
      </>
    )
  }
}

export default LoginPage
