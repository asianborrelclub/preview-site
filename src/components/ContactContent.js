import React, { Component } from "react";
import "./ContactContent.scss";
import Contact from "../components/Contact";

class ContactContent extends Component {
  render() {
    return (
      <>
        <div className="contact-page">
          <Contact />

        </div>
      </>
    );
  }
}

export default ContactContent;