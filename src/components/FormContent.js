import React, { Component } from "react";
import "./FormContent.scss";
import CommitteeForm from "./CommitteeForm";

class FormContent extends Component {
  render() {
    return (
      <div className="form-page">
        <div className="form-card">
          <h1>Committee&nbsp;Application Asian&nbsp;Borrel&nbsp;Club</h1>
          <p id="form-description">
            Thanks for showing interests in joining a committee of the Asian
            Borrel Club! Here you can apply for one or two committees (put the
            one your prefer the most as your first choice). After submitting
            your application we will contact you as fast as possible. For more
            information about our committees, please{" "}
            <a href="/committees" target="_blank">
              click here.
            </a>
          </p>
          <p id="form-description">To ensure we receive your application correctly, please use Chrome or Firefox!</p>
          <CommitteeForm />
        </div>
      </div>
    );
  }
}

export default FormContent;
