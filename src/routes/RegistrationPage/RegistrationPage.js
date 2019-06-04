import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import Registration from './Registration.css'

export class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  handleRegistrationSucces = () => {
    const { history } = this.props
    history.push('/login')
  }
  render() {
    return (
      <section className="reg-page">
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSucces}
        />
      </section>
    )
  }
}

export default RegistrationPage
