import React, { Component } from "react";
import "./FormConfirmationContent.scss";

class FormConfirmationContent extends Component {
  render() {
    return (
      <div className="form-confirmation">
        <h1>Your application has been submitted successfully!</h1>
        <p>
          If you did not receive a confirmation mail within 24 hours, please{" "}
          <a href="/contact">contact us</a>!
        </p>

        <a href="/">
          <button>Go back to homepage</button>
        </a>
      </div>
    );
  }
}

export default FormConfirmationContent;
