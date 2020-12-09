import React, { Component } from "react";
import "./Footer.scss";
import logo from "../img/dark-h-logo-abc-full.svg";
import SocialButton from "./SocialButton";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <img className="logo" src={logo} alt="logo" />
          <span className="footer-text" role="img" aria-label="heart">
            ©&nbsp;Asian&nbsp;Borrel&nbsp;Club.
            All&nbsp;rights&nbsp;reserved.
          </span>
          <SocialButton />
        </div>
      </footer>
    );
  }
}

export default Footer;
