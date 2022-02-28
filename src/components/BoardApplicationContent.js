import React, { Component } from "react";

import "./CommitteeContent.scss";
import "./FormContent.scss";
import "./BoardApplicationContent.scss";

const formData = new FormData();

function encode(data) {
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

export default class BoardApplicationContent extends Component {
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
      .then((response) => {
        if (response.ok) {
          window.location = form.getAttribute("action");
        } else {
          console.log(response.status);
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  render() {
    return (
      <div className="form-page">
        <div className="form-card">
          <h1>Board&nbsp;Application Asian&nbsp;Borrel&nbsp;Club</h1>
          <p id="form-description">
            Thanks for showing interests in joining the Board of the Asian
            Borrel Club in Year 22/23! Are you someone who likes a challenge and
            wants to expand your knowledge and experiences? Check all our Board
            positions and their responsibilities{" "}
            <a href="/board" target="_blank">
              here.
            </a>
          </p>
          <p id="form-description">
            To ensure we receive your application correctly, please use Chrome
            or Firefox!
          </p>

          <div>
            <form
              name="board-form"
              method="post"
              action="/success-page"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="board-form" />

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
                  Phone number:
                  <input
                    type="tel"
                    name="phone-number"
                    id="tel"
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
                    name="place-of-residence"
                    required
                    onChange={this.handleChange}
                  >
                    <option value="">Select province</option>
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
                  <label>
                    For which Board position(s) would you like to apply?
                  </label>
                </p>
                <p>
                  <label>
                    1st choice:
                    <select
                      name="board-choice-1"
                      required
                      onChange={this.handleChange}
                    >
                      <option value="">Select board position</option>
                      <option value="president">President</option>
                      <option value="secretary">Secretary</option>
                      <option value="treasurer">Treasurer</option>
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
                      name="board-choice-2"
                      required
                      onChange={this.handleChange}
                    >
                      <option value="">Select board position</option>
                      <option value="president">President</option>
                      <option value="secretary">Secretary</option>
                      <option value="treasurer">Treasurer</option>
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
                    accept=".pdf"
                  />
                  <p className="file-name1"></p>
                </label>
                <label className="custom-file-upload">
                  <div className="file-name-ml">Upload Motivation Letter*</div>

                  <input
                    type="file"
                    name="ml-file"
                    onChange={this.handleML}
                    accept=".pdf"
                  />
                  <p className="file-name2"></p>
                </label>
              </div>

              <div className="asterisk">*must be a PDF document! (.pdf)</div>
              <p className="terms-accept">
                <input
                  type="checkbox"
                  id="terms-accept"
                  name="terms-accept"
                  required
                />
                <label htmlFor="terms-accept">
                  I accept the&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terms-and-conditions"
                  >
                    Terms and Conditions
                  </a>
                  &nbsp;and the&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </a>
                </label>
              </p>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
