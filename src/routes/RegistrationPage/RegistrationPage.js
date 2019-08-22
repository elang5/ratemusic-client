import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./Registration.css";

export default function RegistrationPage(props) {
  return (
    <section className="reg-page">
      <RegistrationForm {...props} />
    </section>
  );
}
