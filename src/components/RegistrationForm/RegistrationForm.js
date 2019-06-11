import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { 
    error: null,
    full_name: '',
    user_name: ''
  }

  handleNameChange = e => {
    this.setState({
      full_name: e.target.value
    })
  }

  handleUsernameChange = e => {
    this.setState({
      user_name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { password } = e.target
    const { user_name, full_name } = this.state

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
    const { error, user_name, full_name } = this.state
    return (
      <form 
        className="reg-form"
        onSubmit={this.handleSubmit}>
        <div className="error">
          {error && <p className="error">{error}</p>}
        </div>
        <p className="register-text">Register for Rate Music</p>
        <div className="full_name">
          <label className="label" htmlFor="full_name">Full name </label><br />
          <input 
            required
            type="text" 
            name="full_name"
            id="full_name"
            value={full_name}
            onChange={this.handleNameChange}/>
        </div>
        <div className="user_name">
          <label className="label" htmlFor="user_name">Username</label><br />
          <input 
            required
            type="text"
            name="user_name"
            id="user_name"
            value={user_name}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="password">
          <label className="label" htmlFor="password">Password</label>
          <p className="password-rules">Please create an 8+ character password with a number, uppercase letter, and special character.</p>
          <input 
            required
            type="password"
            name="password"
            id="password"
            />
        </div>
        <div className="container">
          <button type="submit" className="register-btn">
            Register
          </button>
        </div>
      </form>
    )
  }
}

export default RegistrationForm
