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
          <div className="resources">
            <div className="links">
              <div>
                <a target="_blank" rel="noopener noreferrer" href="/contact">
                  Contact
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/refund-policy"
                >
                  Refunds
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/shipping-policy"
                >
                  Shipping
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/terms-and-conditions"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
          <span className="footer-text">
            ©&nbsp;Asian&nbsp;Borrel&nbsp;Club. All&nbsp;rights&nbsp;reserved.
          </span>

          <SocialButton />
        </div>
      </footer>
    );
  }
}

export default Footer;
