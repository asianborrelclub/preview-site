import React, { Component } from "react";
import "./CommitteeContent.scss";

class CommitteeForm extends Component {
  render() {
    return (
      <div>
        <form name="committee-form" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="committee-form" />
          <p>
            <label>
              First name:
              <input type="text" name="first-name" required />
            </label>
          </p>
          <p>
            <label>
              Last name:
              <input type="text" name="last-name" required />
            </label>
          </p>
          <p>
            <label>
              Date of birth:
              <input type="date" name="date-of-birth" required />
            </label>
          </p>
          <p>
            <label>
              E-mail:
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Place of residence:
              <select
                defaultValue="Noord-Holland"
                id="place-of-residence"
                required
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
              <input type="text" name="institution" required />
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
                onChange={this.handleChange1}
                accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              />
              <p className="file-name1"></p>
            </label>
            <label className="custom-file-upload">
              <div className="file-name-ml">Upload Motivation Letter*</div>

              <input
                type="file"
                name="ml-file"
                onChange={this.handleChange2}
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
