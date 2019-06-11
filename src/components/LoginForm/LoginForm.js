import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

export class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    const { user_name, password } = e.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(err => {
        this.setState({ error: err.error })
      })
  }

  handleDemoLogin = () => {
    AuthApiService.postLogin({
      user_name: 'testing',
      password: '!Testing1'
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(err => {
        this.setState({ error: err.error })
      })
  }
  render() {
    const { error } = this.state
    return (
        <form 
          className="login-form"
          onSubmit={this.handleSubmitJwtAuth}
        >
          <p className="sign-in">Sign In To Rate Music</p>
          <div className="error-alert">
            {error && <p className="error">{error}</p>}
          </div>
          <div className="user_name_input">
            <label 
              className="label" 
              htmlFor="user_name">
              Username
            </label><br />
            <input 
              required 
              placeholder="testing"
              type="text" 
              name="user_name" 
              id="user_name"/>
          </div>
          <div className="password_input">
            <label 
              className="label" 
              htmlFor="password">
              Password
            </label><br />
            <input 
              required 
              placeholder="!Testing1"
              type="password" 
              name="password" 
              id="password"/>
          </div>
          <div className="btns-container">
            <button 
              type="submit" 
              className="submit-btn">
              Sign In
            </button>
            <button
              type="button"
              className="submit-btn demo"
              onClick={this.handleDemoLogin}>
              Demo Login
            </button>
          </div>
        </form>
    )
  }
}

export default LoginForm
