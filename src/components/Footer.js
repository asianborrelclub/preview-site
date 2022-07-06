import React, { Component } from "react";
import "./Footer.scss";
import logo from "../img/dark-h-logo-abc-full.svg";

import SocialButton from "./SocialButton";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="row">
            <div className="column d1">
              <img className="logo" src={logo} alt="logo" />
              <div className="socialb">
                <SocialButton />
              </div>
            </div>

            <div className="column c2">
              <h3>
                <u>Association Asian Borrel Club</u>
              </h3>
              <div className="information-tab">
                General enquiries:
                <div className="info-link">
                  <a href="mailto: info@asianborrelclub.nl">
                    info@asianborrelclub.nl
                  </a>
                </div>
                For companies:
                <div className="info-link">
                  <a href="mailto: external@asianborrelclub.nl">
                    external@asianborrelclub.nl
                  </a>
                </div>
              </div>
              <div className="information-tab">
                <p>KvK-number:</p>
                <p>81660200</p>
              </div>
            </div>
            <div className="column c2">
              <h3>
                <u>About us</u>
              </h3>
              <div className="information-tab">
                ABC brings students with an interest in the Asian culture
                together through befriending and networking events.
              </div>
              <div className="row2">
                <div className="column2 push50">
                  <h3>
                    <u>Information</u>
                  </h3>
                  <div className="information-tab">
                    <div className="links">
                      <dl>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/contact"
                          >
                            Contact
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_top"
                            className="underlinenone"
                            href="/#partners"
                          >
                            Partners
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/contact"
                          >
                            Board
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/committees"
                          >
                            Committees
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_top"
                            className="underlinenone"
                            href="/#calendar"
                          >
                            Calender
                          </a>
                        </dt>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="column2">
                  <h3>
                    <u>Resources</u>
                  </h3>
                  <div className="information-tab">
                    <div className="links">
                      <dl>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/privacy-policy"
                          >
                            Privacy Policy
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/shipping-policy"
                          >
                            Shipping
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/refund-policy"
                          >
                            Refunds
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/terms-and-conditions"
                          >
                            Terms & Conditions
                          </a>
                        </dt>
                        <dt>
                          <a
                            target="_blank"
                            className="underlinenone"
                            href="/events-terms-and-conditions"
                          >
                            T&nbsp;&&nbsp;C&nbsp;for&nbsp;events
                          </a>
                        </dt>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column3 d2">
            <img className="logo " src={logo} alt="logo" />
            <SocialButton />
          </div>
          <span className="footer-text">
            ©&nbsp;Asian&nbsp;Borrel&nbsp;Club. All&nbsp;rights&nbsp;reserved.
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
