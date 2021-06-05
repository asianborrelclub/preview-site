import React, { Component } from "react";
import "./ProductForm.scss";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class ProductForm extends Component {
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
        fetch(`/.netlify/functions/mollie-int`)
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
      <>
        <form name="hoodie-form" method="post" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="hoodie-form" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>

          <h1>Size</h1>
          <p>
            <select name="size" required onChange={this.handleChange}>
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </p>

          <h1>Customer information</h1>
          <p>
            <input
              type="text"
              name="first-name"
              required
              onChange={this.handleChange}
              placeholder="First name"
            />
          </p>
          <p>
            <input
              type="text"
              name="last-name"
              required
              onChange={this.handleChange}
              placeholder="Last name"
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              required
              onChange={this.handleChange}
              placeholder="Email address"
            />
          </p>
          <p>
            <input
              type="text"
              name="company"
              onChange={this.handleChange}
              placeholder="Company (optional)"
            />
          </p>
          <h1>Shipping address</h1>
          <p>
            <select
              name="delivery-choice"
              required
              onChange={this.handleChange}
            >
              <option value="">Select delivery option</option>
              <option value="hoodie-meetup">Hoodie meetup</option>
              <option value="home">Send to home</option>
            </select>
          </p>
          <p>
            <input
              type="text"
              name="street-and-house-number"
              required
              onChange={this.handleChange}
              placeholder="Street and house number"
            />
          </p>
          <p>
            <input
              type="text"
              name="apt-suite-etc"
              onChange={this.handleChange}
              placeholder="Apt, suite, etc (optional)"
            />
          </p>
          <p>
            <input
              type="text"
              name="postal-code"
              required
              onChange={this.handleChange}
              placeholder="Postal Code"
            />
          </p>
          <p>
            <input
              type="text"
              name="city"
              required
              onChange={this.handleChange}
              placeholder="City"
            />
          </p>
          <button type="submit">Pre-order now</button>
          <span>
            *All sales will be allocated to future ABC activities and events
          </span>
        </form>
      </>
    );
  }
}

export default ProductForm;
