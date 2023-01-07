import React from "react";
import Button from "../../button/Button";
import "./form.css";

const Form = ({ children, disableSubmit, FooterComponent }) => {
  return (
    <form className="form-container">
      {children}
      {disableSubmit ? null : <Button text="Submit" />}
      {FooterComponent ? FooterComponent : null}
    </form>
  );
};

export default Form;
