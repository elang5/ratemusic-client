import React, { Component } from "react";
import { connect } from "react-redux";
import { clearError } from "../../actions";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./Registration.css";

export class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSucces = () => {
    this.props.dispatch(clearError());
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section className="reg-page">
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSucces}
        />
      </section>
    );
  }
}

export default connect()(RegistrationPage);
