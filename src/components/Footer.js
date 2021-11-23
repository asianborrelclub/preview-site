import React, { Component } from "react";
import "./Footer.scss";
import logo from "../img/dark-h-logo-abc-full.svg";

import SocialButton from "./SocialButton";



class Footer extends Component {
  render() {
    return (
      <footer>
<div className="footer">
  
<div class="row">
  <div class="column d1" >
  <img className="logo" src={logo} alt="logo" />
  <div class="socialb">
    <SocialButton />
  </div>
</div>

  <div class="column c2" >
    <h3><u>Association Asian Borrel Club</u></h3>
    <div class="information-tab">
    General enquiries:<div class="info-link">info@asianborrelclub.nl </div>  
    <p></p>
    For companies:<div class="info-link">external@asianborrelclub.nl</div>  
      </div>
      <div class="information-tab">
    <p>KvK-number: <p></p>
    81660200</p>
    </div>
</div>
<div class="column c2" >
    <h3><u>About us</u></h3>
  <div class="information-tab">
      ABC brings students with an interest in the Asian culture together through befriending and networking events.
  </div>  
    <div class="row2">
      <div class="column2 push50" >
        <h3><u>Information</u></h3>
            <div class="information-tab">
            <div className="links"><dl>
            <dt><a target="_blank" className="underlinenone" href="/contact">Contact</a></dt>
            <dt><a target="_top" className="underlinenone" href="/#partners">Partners</a></dt>
            <dt><a target="_blank" className="underlinenone" href="/contact">Board</a></dt>
            <dt><a target="_blank" className="underlinenone" href="/committees">Committees</a></dt>
            <dt><a target="_top" className="underlinenone" href="/#calendar">Calender</a></dt>
            </dl>
          </div>
      </div>
    </div>
  <div class="column2">
  <h3><u>Resources</u></h3>
  <div class="information-tab">
  <div className="links">
    <dl>
    <dt><a target="_blank" className="underlinenone" href="/privacy-policy">Privacy Policy</a></dt>
    <dt><a target="_blank" className="underlinenone" href="/refund-policy">Shipping</a></dt>
    <dt><a target="_blank" className="underlinenone" href="/shipping-policy">Refunds</a></dt>
    <dt><a target="_blank" className="underlinenone" href="/terms-and-conditions">Terms and Conditions</a></dt>
    </dl>
  </div>
  </div>
</div>
  </div>
</div>
</div>
  <div class="column3 d2" >
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