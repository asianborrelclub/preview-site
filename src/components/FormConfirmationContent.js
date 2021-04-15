import React, { Component } from "react";
import "./FormConfirmationContent.scss";

class FormConfirmationContent extends Component {
  render() {
    return (
      <div className="form-confirmation">
        <h1>Your application has been submitted successfully!</h1>
        <p>We will be contactingh you in 2 to 3 days.</p>
        <a href="/">
          <button>Go back to homepage</button>
        </a>
      </div>
    );
  }
}

export default FormConfirmationContent;
