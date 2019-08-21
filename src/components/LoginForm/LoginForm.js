import React, { Component } from "react";
import { connect } from "react-redux";
import { setUser, setError } from "../../actions";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import "./LoginForm.css";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  handleUsernameChange = e => {
    this.props.dispatch(setUser(e.target.value));
  };

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    const { user_name } = this.props;
    const { password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name,
      password: password.value
    })
      .then(res => {
        password.value = "";
        this.props.dispatch(setUser(""));
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(err => {
        this.props.dispatch(setError(err.error));
      });
  };

  handleDemoLogin = () => {
    AuthApiService.postLogin({
      user_name: "testing",
      password: "!Testing1"
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(err => {
        this.props.dispatch(setError(err.error));
      });
  };

  render() {
    const { user_name, error } = this.props;
    return (
      <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
        <p className="sign-in">Sign In To Rate Music</p>
        <div className="error-alert">
          {error && <p className="error">{error}</p>}
        </div>
        <div className="user_name_input">
          <label className="label" htmlFor="user_name">
            Username
          </label>
          <br />
          <input
            required
            placeholder="testing"
            type="text"
            name="user_name"
            id="user_name"
            value={user_name}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="password_input">
          <label className="label" htmlFor="password">
            Password
          </label>
          <br />
          <input
            required
            placeholder="!Testing1"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="btns-container">
          <button type="submit" className="submit-btn">
            Sign In
          </button>
          <button
            type="button"
            className="submit-btn demo"
            onClick={this.handleDemoLogin}
          >
            Demo Login
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user_name: state.user_name,
  error: state.error
});

export default connect(mapStateToProps)(LoginForm);
