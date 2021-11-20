import React, { Component } from "react";
import "./SocialButton.scss";

class SocialButton extends Component {
  render() {
    return (
      <div className="btn-social">
        <a
          href="https://www.instagram.com/asianborrelclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-instagram">
            <i className="fab fa-instagram" />
          </button>
        </a>
        <a
          href="https://www.facebook.com/asianborrelclub/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-facebook">
            <i className="fab fa-facebook-f" />
          </button>
        </a>
        <a
          href="https://discord.gg/v8TCzKYHga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-discord">
            <i className="fab fa-discord" />
          </button>
        </a>
        <a
          href="https://nl.linkedin.com/in/asian-borrel-club"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-discord">
            <i class="fab fa-linkedin-in"></i>
          </button>
        </a>
      </div>
    );
  }
}

export default SocialButton;