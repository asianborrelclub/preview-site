import React, { Component } from "react";
import "./Footer.scss";
import logo from "../img/dark-h-logo-abc-full.svg";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <img className="logo" src={logo} alt="logo" />
          <span className="footer-text" role="img" aria-label="heart">
            Made&nbsp;with&nbsp;❤️ -&nbsp; ©&nbsp;Asian&nbsp;Borrel&nbsp;Club.
            All&nbsp;rights&nbsp;reserved.
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
