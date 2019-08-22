import React from "react";
import { connect } from "react-redux";
import { clearError } from "../../actions";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

function LoginPage(props) {
  const handleLoginSuccess = () => {
    props.dispatch(clearError());
    const { location, history } = props;
    const destination = (location.state || {}).from || "/albums";
    history.push(destination);
  };

  return (
    <>
      <div className="login-page">
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </>
  );
}

export default connect()(LoginPage);

LoginPage.defaultProps = {
  location: {},
  history: {
    push: () => {}
  }
};
