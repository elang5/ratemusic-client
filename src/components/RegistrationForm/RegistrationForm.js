import React from "react";
import { connect } from "react-redux";
import { setError, setName, setUser, clearError } from "../../actions";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";

function RegistrationForm(props) {
  const handleNameChange = e => {
    props.dispatch(setName(e.target.value));
  };

  const handleUsernameChange = e => {
    props.dispatch(setUser(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { password } = e.target;
    const { user_name, full_name } = props;

    AuthApiService.postUser({
      user_name: user_name,
      password: password.value,
      full_name: full_name
    })
      .then(res => props.dispatch(clearError()), props.history.push("/login"))
      .catch(err => {
        props.dispatch(setError(err.error));
      });
  };

  const { error, user_name, full_name } = props;
  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      <div className="error">{error && <p className="error">{error}</p>}</div>
      <p className="register-text">Register for Rate Music</p>
      <div className="full_name">
        <label className="label" htmlFor="full_name">
          Full name{" "}
        </label>
        <br />
        <input
          required
          type="text"
          name="full_name"
          id="full_name"
          value={full_name}
          onChange={handleNameChange}
        />
      </div>
      <div className="user_name">
        <label className="label" htmlFor="user_name">
          Username
        </label>
        <br />
        <input
          required
          type="text"
          name="user_name"
          id="user_name"
          value={user_name}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="password">
        <label className="label" htmlFor="password">
          Password
        </label>
        <p className="password-rules">
          Please create an 8+ character password with a number, uppercase
          letter, and special character.
        </p>
        <input required type="password" name="password" id="password" />
      </div>
      <div className="container">
        <button type="submit" className="register-btn">
          Register
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  full_name: state.full_name,
  user_name: state.user_name,
  error: state.error
});

export default connect(mapStateToProps)(RegistrationForm);
