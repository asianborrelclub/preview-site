import React, { Component } from "react";
import "./FormContent.scss";
import CommitteeForm from "./CommitteeForm";

class FormContent extends Component {
  constructor(props) {
    super(props);

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1(e) {
    const [file] = e.target.files;
    const { name: fileName } = file || {};
    let fileNameAndSize = `CV:  ${fileName}`;
    if (fileName === undefined) {
      fileNameAndSize = `Upload CV*`;
    }
    document.querySelector(".file-name1").textContent = fileNameAndSize;

    const a = document.querySelector(".file-name-cv");
    a.style.display = "none";
  }

  handleChange2(e) {
    const [file] = e.target.files;
    const { name: fileName } = file || {};
    let fileNameAndSize = `Motivation Letter: ${fileName}`;
    if (fileName === undefined) {
      fileNameAndSize = `Upload Motivation Letter*`;
    }
    document.querySelector(".file-name2").textContent = fileNameAndSize;
    const a = document.querySelector(".file-name-ml");
    a.style.display = "none";
  }

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
          <CommitteeForm />
        </div>
      </div>
    );
  }
}

export default FormContent;
