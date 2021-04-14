import React, { Component } from "react";
import "./CommitteeContent.scss";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class CommitteeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange1 = (e) => {
    const [file] = e.target.files;
    const { name: fileName } = file || {};
    let fileNameAndSize = `CV:  ${fileName}`;
    if (fileName === undefined) {
      fileNameAndSize = `Upload CV*`;
    }
    document.querySelector(".file-name1").textContent = fileNameAndSize;
    const a = document.querySelector(".file-name-cv");
    a.style.display = "none";
  };

  handleChange2 = (e) => {
    const [file] = e.target.files;
    const { name: fileName } = file || {};
    let fileNameAndSize = `Motivation Letter: ${fileName}`;
    if (fileName === undefined) {
      fileNameAndSize = `Upload Motivation Letter*`;
    }
    document.querySelector(".file-name2").textContent = fileNameAndSize;
    const a = document.querySelector(".file-name-ml");
    a.style.display = "none";
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleCV = (e) => {
    this.handleAttachment(e);
    this.handleChange1(e);
  };

  handleML = (e) => {
    this.handleAttachment(e);
    this.handleChange2(e);
  };

  handleSubmit = (e) => {
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then((window.location = form.getAttribute("action")))
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form
          name="committee-form"
          method="post"
          action="/success-page"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="committee-form" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              First name:
              <input
                type="text"
                name="first-name"
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Last name:
              <input
                type="text"
                name="last-name"
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Date of birth:
              <input
                type="date"
                name="date-of-birth"
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Place of residence:
              <select
                defaultValue="Noord-Holland"
                id="place-of-residence"
                required
                onChange={this.handleChange}
              >
                <option value="Noord-Holland">Noord-Holland</option>
                <option value="Zuid-Holland">Zuid-Holland</option>
                <option value="Utrecht">Utrecht</option>
                <option value="Flevoland">Flevoland</option>
                <option value="Gelderland">Gelderland</option>
                <option value="Noord-Brabant">Noord-Brabant</option>
                <option value="Overijssel">Overijssel</option>
                <option value="Limburg">Limburg</option>
                <option value="Friesland">Friesland</option>
                <option value="Groningen">Groningen</option>
                <option value="Drenthe">Drenthe</option>
                <option value="Zeeland">Zeeland</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Institution:
              <input
                type="text"
                name="institution"
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <div className="committee-choice">
            <p>
              <label>For which committee(s) would you like to apply?</label>
            </p>
            <p>
              <label>
                1st choice:
                <select
                  defaultValue="placeholder"
                  id="committees-choice-1"
                  required
                  onChange={this.handleChange}
                >
                  <option value="placeholder" disabled>
                    Select committee
                  </option>
                  <option value="marketing">Marketing</option>
                  <option value="it">IT</option>
                  <option value="events">Events</option>
                  <option value="external">External Affairs</option>
                  <option value="introduction">Introduction</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                2nd choice:
                <select
                  defaultValue="placeholder"
                  id="committees-choice-2"
                  required
                  onChange={this.handleChange}
                >
                  <option value="placeholder" disabled>
                    Select committee
                  </option>
                  <option value="none">None</option>
                  <option value="marketing">Marketing</option>
                  <option value="it">IT</option>
                  <option value="events">Events</option>
                  <option value="external">External Affairs</option>
                  <option value="introduction">Introduction</option>
                </select>
              </label>
            </p>
          </div>

          <div className="file-upload">
            <label className="custom-file-upload">
              <div className="file-name-cv">Upload CV*</div>

              <input
                type="file"
                name="cv-file"
                onChange={this.handleCV}
                accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
              <p className="file-name1"></p>
            </label>
            <label className="custom-file-upload">
              <div className="file-name-ml">Upload Motivation Letter*</div>

              <input
                type="file"
                name="ml-file"
                onChange={this.handleML}
                accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
              <p className="file-name2"></p>
            </label>
          </div>

          <div className="asterisk">
            *must be a PDF or Word document! (.pdf, .doc/.docx)
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommitteeForm;
