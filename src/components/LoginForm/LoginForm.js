import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    // this.setState({ error: null })
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
        console.log(err)
        this.setState({ error: err.error })
      })
  }
  render() {
    const { error } = this.state
    return (
      <div>
        <form 
          className="login-form"
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className="error-alert">
            {error && <p>{error}</p>}
          </div>
          <div className="user_name_input">
            <label htmlFor="user_name">
              Username
            </label>
            <input required type="text" name="user_name" id="user_name"/>
          </div>
          <div className="password_input">
            <label htmlFor="password">
              Password
            </label>
            <input required type="password" name="password" id="password"/>
          </div>
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
