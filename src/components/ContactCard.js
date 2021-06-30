import React, { Component } from "react";
import "./ContactCard.scss";

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <div className="contact-upper">
          <img src={this.props.image} alt="Person" className="contact-image" />
          <div className="contact-heading">
            <h2>{this.props.title}</h2>
            <p className="contact-name">{this.props.name}</p>
            <p className="contact-description">{this.props.description}</p>
          </div>
        </div>
        <div className="contact-socials">
          <div className="social-header">
            <div className="social-title">instagram</div>
            <a
              href={this.props.instagram_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.instagram}
            </a>
          </div>
          <div className="social-header">
            <div className="social-title">linkedin</div>
            <a
              href={this.props.linkedin_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.linkedin}
            </a>
          </div>
          <div className="social-header">
            <div className="social-title">e-mail</div>
            <a
              href={`mailto:` + this.props.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.email}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
