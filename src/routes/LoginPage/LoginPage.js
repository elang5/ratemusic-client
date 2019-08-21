import React, { Component } from "react";
import { connect } from "react-redux";
import { clearError } from "../../actions";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    this.props.dispatch(clearError());
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/albums";
    history.push(destination);
  };

  render() {
    return (
      <>
        <div className="login-page">
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(LoginPage);
