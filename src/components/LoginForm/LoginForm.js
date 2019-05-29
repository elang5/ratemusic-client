import React, { Component } from 'react'

export class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({
      error: null
    })
    const { user_name, password } = e.target
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default LoginForm
