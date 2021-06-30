import React, { Component } from "react";
import "./MembershipContent.scss";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class MembershipContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      .then(
        fetch(`/.netlify/functions/mollie-int-membership`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            window.location = data;
          })
      )
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  render() {
    return (
      <div className="membership-page">
        <div className="membership-info">
          <h1>Become a general member!</h1>
        </div>
        <form name="membership-form" method="post" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="membership-form" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <p>
            <b>
              <label htmlFor="first-name">First name:</label>
            </b>
            <input
              type="text"
              name="first-name"
              id="first-name"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <b>
              <label htmlFor="last-name">Last name:</label>
            </b>
            <input
              type="text"
              name="last-name"
              id="last-name"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <b>
              <label htmlFor="email">E-mail:</label>
            </b>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </p>

          <p>
            <b>
              <label htmlFor="dob">Date of birth:</label>
            </b>
            <input
              type="date"
              name="date-of-birth"
              id="dob"
              required
              onChange={this.handleChange}
            />
          </p>
          <div className="radio-gender">
            <b>
              <div>Gender:</div>
            </b>
            <p>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="male">Male</label>
            </p>
            <p>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="female">Female</label>
            </p>
            <p>
              <input
                type="radio"
                id="gender_other"
                name="gender"
                value="GENDER_OTHER_SELECTED"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="gender_other">Other</label>
            </p>
            <input
              type="text"
              name="gender_other"
              onChange={this.handleChange}
            />
          </div>

          <p>
            <b>
              <label htmlFor="tel">Phone number:</label>
            </b>
            <input
              type="tel"
              name="phone-number"
              id="tel"
              required
              onChange={this.handleChange}
            />
          </p>

          <div className="radio-institution">
            <b>
              <div>At which institution are you studying?</div>
            </b>
            <p>
              <input
                type="radio"
                id="uva"
                name="institution"
                value="Universiteit van Amsterdam"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="uva">University of Amsterdam</label>
            </p>

            <p>
              <input
                type="radio"
                id="vu"
                name="institution"
                value="Vrije Universiteit Amsterdam"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="vu">VU University Amsterdam</label>
            </p>
            <input
              type="radio"
              id="hva"
              name="institution"
              value="Hogeschool van Amsterdam"
              onChange={this.handleChange}
              required
            />
            <label htmlFor="hva">Amsterdam University of Applied Sciences</label>
            <p>
              <input
                type="radio"
                id="institution_other"
                name="institution"
                value="INSTITUTION_OTHER_SELECTED"
                onChange={this.handleChange}
                required
              />
              <label htmlFor="institution_other">Other</label>
            </p>
            <input
              type="text"
              name="institution_other"
              onChange={this.handleChange}
            />
          </div>

          <p>
            <b>
              <label htmlFor="student-number">Student number:</label>
            </b>
            <input
              type="text"
              name="student-number"
              id="student-number"
              required
              onChange={this.handleChange}
            />
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default MembershipContent;
