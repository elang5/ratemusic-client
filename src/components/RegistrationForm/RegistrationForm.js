import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

export class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault()
    const { full_name, user_name, password } = e.target

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value
    })
      .then(user => {
        user_name.value = ''
        password.value = ''
        full_name.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  
  render() {
    const { error } = this.state
    return (
      <form 
        className="reg-form"
        onSubmit={this.handleSubmit}>
        <div className="error">
          {error && <p>{error}</p>}
        </div>
        <div className="full_name">
          <label htmlFor="full_name">Full name </label>
          <input 
            required
            type="text" 
            name="full_name"
            id="full_name"/>
        </div>
        <div className="user_name">
          <label htmlFor="user_name">User name</label>
          <input 
            required
            type="text"
            name="user_name"
            id="user_name"
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input 
            required
            type="password"
            name="password"
            id="password"
            />
        </div>
        <button type="submit">
          Register
        </button>
      </form>
    )
  }
}

export default RegistrationForm
